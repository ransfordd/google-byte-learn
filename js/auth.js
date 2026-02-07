/**
 * Authentication Module for Google ByteLearn
 * Handles user signup, login, logout, and password reset
 */

import { auth, db } from './firebase-config.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    sendPasswordResetEmail,
    onAuthStateChanged,
    updateProfile
} from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js';
import {
    doc,
    setDoc,
    getDoc,
    serverTimestamp
} from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js';

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

/**
 * Create a new user account
 */
export async function signUp(email, password, displayName) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update profile with display name
        await updateProfile(user, { displayName });

        // Create user document in Firestore
        await createUserProfile(user, { displayName });

        return { success: true, user };
    } catch (error) {
        console.error('Signup error:', error);
        return { success: false, error: getErrorMessage(error.code) };
    }
}

/**
 * Sign in with email and password
 */
export async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: getErrorMessage(error.code) };
    }
}

/**
 * Sign in with Google
 */
export async function loginWithGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        // Check if user profile exists, create if not
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (!userDoc.exists()) {
            await createUserProfile(user);
        }

        return { success: true, user };
    } catch (error) {
        console.error('Google login error:', error);
        return { success: false, error: getErrorMessage(error.code) };
    }
}

/**
 * Sign out the current user
 */
export async function logout() {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        console.error('Logout error:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Send password reset email
 */
export async function resetPassword(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        return { success: true };
    } catch (error) {
        console.error('Password reset error:', error);
        return { success: false, error: getErrorMessage(error.code) };
    }
}

/**
 * Create user profile in Firestore
 */
async function createUserProfile(user, additionalData = {}) {
    const userRef = doc(db, 'users', user.uid);

    const userData = {
        uid: user.uid,
        email: user.email,
        displayName: additionalData.displayName || user.displayName || 'Learner',
        photoURL: user.photoURL || null,
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),

        // Gamification
        xp: 0,
        level: 1,
        streak: 0,
        lastActiveDate: null,
        badges: [],

        // Progress
        coursesEnrolled: [],
        lessonsCompleted: 0,
        quizzesCompleted: 0,
        hoursLearned: 0,

        // Settings
        settings: {
            theme: 'light',
            notifications: true,
            emailUpdates: true
        }
    };

    await setDoc(userRef, userData);
    console.log('User profile created:', user.uid);
}

/**
 * Get current user
 */
export function getCurrentUser() {
    return auth.currentUser;
}

/**
 * Listen for auth state changes
 */
export function onAuthChange(callback) {
    return onAuthStateChanged(auth, callback);
}

/**
 * Convert Firebase error codes to user-friendly messages
 */
function getErrorMessage(errorCode) {
    const messages = {
        'auth/email-already-in-use': 'This email is already registered. Please log in instead.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/operation-not-allowed': 'This sign-in method is not enabled.',
        'auth/weak-password': 'Password should be at least 6 characters.',
        'auth/user-disabled': 'This account has been disabled.',
        'auth/user-not-found': 'No account found with this email.',
        'auth/wrong-password': 'Incorrect password. Please try again.',
        'auth/invalid-credential': 'Invalid email or password.',
        'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
        'auth/popup-closed-by-user': 'Sign-in was cancelled.',
        'auth/network-request-failed': 'Network error. Please check your connection.'
    };

    return messages[errorCode] || 'An error occurred. Please try again.';
}

// Make functions available globally for non-module scripts
if (typeof window !== 'undefined') {
    window.ByteLearnAuth = {
        signUp,
        login,
        loginWithGoogle,
        logout,
        resetPassword,
        getCurrentUser,
        onAuthChange
    };
}
