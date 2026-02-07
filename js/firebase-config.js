/**
 * Firebase Configuration for Google ByteLearn
 * Using Firebase Modular SDK v12.9.0
 */

// Firebase imports (using CDN for browser compatibility)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js';
import { getAuth, connectAuthEmulator } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js';
import { getFirestore, connectFirestoreEmulator, enableIndexedDbPersistence } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-storage.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAeaieyirbE2YsvsdEc8b8RQTdxo5MPdI",
    authDomain: "bytelearn-75245.firebaseapp.com",
    projectId: "bytelearn-75245",
    storageBucket: "bytelearn-75245.firebasestorage.app",
    messagingSenderId: "1012323312628",
    appId: "1:1012323312628:web:798d7bbb4840e529a88fa1",
    measurementId: "G-476H1FRTJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

// Enable offline persistence for Firestore
try {
    enableIndexedDbPersistence(db);
    console.log('Firestore offline persistence enabled');
} catch (err) {
    if (err.code === 'failed-precondition') {
        console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
        console.warn('Browser does not support offline persistence.');
    }
}

// Export for use in other modules
export { app, auth, db, storage, analytics };
export default app;
