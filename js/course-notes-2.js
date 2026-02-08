// AI & ML, Computer Fundamentals, and Databases course notes
// These extend the courseNotes object from course-notes.js

courseNotes['ai-machine-learning'] = [
{
  module: 1, title: 'Introduction to AI',
  sections: [
    { heading: 'What is Artificial Intelligence?',
      content: `<p><strong>Artificial Intelligence (AI)</strong> is the field of computer science focused on creating systems that can perform tasks that normally require human intelligence — such as recognizing speech, making decisions, translating languages, and identifying patterns.</p>
<p>AI is broadly categorized into two types:</p>
<ul>
<li><strong>Narrow AI (Weak AI):</strong> Designed for a specific task. Examples: Siri, spam filters, recommendation engines. This is what exists today.</li>
<li><strong>General AI (Strong AI):</strong> Hypothetical AI that can perform any intellectual task a human can. This does not yet exist.</li>
</ul>
<h5>Brief History of AI</h5>
<table class="reading-table">
<tr><th>Year</th><th>Milestone</th></tr>
<tr><td>1950</td><td>Alan Turing proposes the Turing Test</td></tr>
<tr><td>1956</td><td>Term "Artificial Intelligence" coined at Dartmouth Conference</td></tr>
<tr><td>1997</td><td>IBM's Deep Blue defeats world chess champion</td></tr>
<tr><td>2011</td><td>IBM Watson wins Jeopardy!</td></tr>
<tr><td>2016</td><td>Google DeepMind's AlphaGo defeats Go world champion</td></tr>
<tr><td>2022</td><td>ChatGPT launches, bringing large language models mainstream</td></tr>
</table>
<div class="reading-callout"><h5>AI vs ML vs Deep Learning</h5><p><strong>AI</strong> is the broadest concept (machines mimicking intelligence). <strong>Machine Learning</strong> is a subset of AI (learning from data). <strong>Deep Learning</strong> is a subset of ML (using neural networks with many layers).</p></div>` },
    { heading: 'Applications of AI Today',
      content: `<p>AI is already embedded in many products and services you use daily:</p>
<ul>
<li><strong>Virtual Assistants:</strong> Siri, Google Assistant, Alexa use natural language processing to understand and respond to voice commands.</li>
<li><strong>Recommendation Systems:</strong> Netflix, YouTube, and Spotify suggest content based on your viewing/listening history using collaborative filtering.</li>
<li><strong>Self-Driving Cars:</strong> Tesla, Waymo use computer vision and sensor fusion to navigate roads autonomously.</li>
<li><strong>Healthcare:</strong> AI models detect diseases from medical images (X-rays, MRIs) with accuracy rivaling human doctors.</li>
<li><strong>Finance:</strong> Fraud detection systems analyze transaction patterns in real-time to flag suspicious activity.</li>
<li><strong>Language Translation:</strong> Google Translate uses neural machine translation to translate between 100+ languages.</li>
</ul>
<div class="reading-callout"><h5>Ethics in AI</h5><p>AI raises important ethical questions: bias in training data, privacy concerns, job displacement, and accountability for AI decisions. Responsible AI development requires addressing these issues proactively.</p></div>` }
  ]
},
{
  module: 2, title: 'Data Science Essentials',
  sections: [
    { heading: 'Working with Data in Python',
      content: `<p>Data science begins with data. Python's ecosystem provides powerful libraries for data manipulation and analysis.</p>
<h5>NumPy — Numerical Computing</h5>
<pre><code>import numpy as np

# Creating arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4], [5, 6]])

# Operations (vectorized - much faster than loops)
print(arr * 2)        # [2, 4, 6, 8, 10]
print(arr.mean())     # 3.0
print(arr.std())      # 1.414
print(matrix.shape)   # (3, 2)</code></pre>
<h5>Pandas — Data Analysis</h5>
<pre><code>import pandas as pd

# Creating a DataFrame (like a spreadsheet)
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'Score': [88, 92, 78]
})

# Basic operations
print(df.describe())    # Statistical summary
print(df['Age'].mean()) # 30.0
filtered = df[df['Score'] > 80]  # Filter rows
df.sort_values('Score', ascending=False)  # Sort</code></pre>` },
    { heading: 'Data Visualization',
      content: `<p>Visualizing data helps identify patterns, trends, and outliers that numbers alone can't reveal.</p>
<pre><code>import matplotlib.pyplot as plt

# Line chart
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]
plt.plot(x, y, marker='o')
plt.title('Simple Line Chart')
plt.xlabel('X Axis')
plt.ylabel('Y Axis')
plt.show()

# Bar chart
categories = ['Python', 'JavaScript', 'Java', 'C++']
popularity = [30, 25, 20, 15]
plt.bar(categories, popularity, color=['#3776AB', '#F7DF1E', '#ED8B00', '#00599C'])
plt.title('Language Popularity')
plt.show()</code></pre>
<div class="reading-callout"><h5>Choosing the Right Chart</h5><p><strong>Line charts:</strong> Trends over time. <strong>Bar charts:</strong> Comparing categories. <strong>Scatter plots:</strong> Relationships between variables. <strong>Histograms:</strong> Distribution of data. <strong>Pie charts:</strong> Parts of a whole (use sparingly).</p></div>` }
  ]
},
{
  module: 3, title: 'Machine Learning Fundamentals',
  sections: [
    { heading: 'What is Machine Learning?',
      content: `<p><strong>Machine Learning</strong> is a subset of AI where computers learn patterns from data without being explicitly programmed. Instead of writing rules, you provide data and the algorithm discovers the rules.</p>
<h5>Types of Machine Learning</h5>
<table class="reading-table">
<tr><th>Type</th><th>Description</th><th>Examples</th></tr>
<tr><td><strong>Supervised Learning</strong></td><td>Learn from labeled data (input → known output)</td><td>Spam detection, price prediction, image classification</td></tr>
<tr><td><strong>Unsupervised Learning</strong></td><td>Find patterns in unlabeled data</td><td>Customer segmentation, anomaly detection</td></tr>
<tr><td><strong>Reinforcement Learning</strong></td><td>Learn by trial and error with rewards</td><td>Game playing, robotics, autonomous driving</td></tr>
</table>
<h5>The ML Workflow</h5>
<ol>
<li><strong>Collect Data</strong> — Gather relevant, quality data</li>
<li><strong>Prepare Data</strong> — Clean, normalize, split into training/testing sets</li>
<li><strong>Choose a Model</strong> — Select an appropriate algorithm</li>
<li><strong>Train the Model</strong> — Feed training data to the algorithm</li>
<li><strong>Evaluate</strong> — Test accuracy on unseen data</li>
<li><strong>Tune & Improve</strong> — Adjust parameters, add features</li>
<li><strong>Deploy</strong> — Put the model into production</li>
</ol>` },
    { heading: 'Key ML Concepts',
      content: `<p>Understanding these concepts is essential before building any ML model:</p>
<ul>
<li><strong>Features:</strong> The input variables (columns) your model uses to make predictions. Example: house size, location, bedrooms.</li>
<li><strong>Labels/Targets:</strong> The output you're trying to predict. Example: house price.</li>
<li><strong>Training Set:</strong> Data used to teach the model (typically 70-80% of your data).</li>
<li><strong>Test Set:</strong> Data held back to evaluate model performance (typically 20-30%).</li>
<li><strong>Overfitting:</strong> Model memorizes training data but fails on new data (too complex).</li>
<li><strong>Underfitting:</strong> Model is too simple to capture underlying patterns.</li>
</ul>
<pre><code>from sklearn.model_selection import train_test_split

# Split data: 80% training, 20% testing
X_train, X_test, y_train, y_test = train_test_split(
    features, labels, test_size=0.2, random_state=42
)</code></pre>
<div class="reading-callout"><h5>The Bias-Variance Tradeoff</h5><p>A good model balances <strong>bias</strong> (underfitting) and <strong>variance</strong> (overfitting). Simple models have high bias; complex models have high variance. The goal is the sweet spot in between.</p></div>` }
  ]
},
{
  module: 4, title: 'Supervised Learning',
  sections: [
    { heading: 'Linear Regression',
      content: `<p><strong>Linear regression</strong> predicts a continuous numerical value by fitting a straight line through data points. It's one of the simplest yet most widely used ML algorithms.</p>
<pre><code>from sklearn.linear_model import LinearRegression
import numpy as np

# Sample data: house size (sq ft) → price ($)
X = np.array([[800], [1200], [1600], [2000], [2400]])
y = np.array([150000, 225000, 300000, 375000, 450000])

# Create and train the model
model = LinearRegression()
model.fit(X, y)

# Make predictions
predicted_price = model.predict([[1800]])
print(f"Predicted price: ${predicted_price[0]:,.0f}")

# Model details
print(f"Slope: {model.coef_[0]:.2f}")       # Price per sq ft
print(f"Intercept: {model.intercept_:.2f}")  # Base price
print(f"R² Score: {model.score(X, y):.4f}")  # Accuracy</code></pre>
<div class="reading-callout"><h5>When to Use Linear Regression</h5><p>Use it when: the relationship between input and output is roughly linear, you need interpretable results, or as a baseline model to compare against more complex algorithms.</p></div>` },
    { heading: 'Classification',
      content: `<p><strong>Classification</strong> predicts a categorical label (e.g., spam/not spam, cat/dog, positive/negative).</p>
<pre><code>from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, classification_report

# Sample: features → pass/fail
X_train = [[85, 8], [92, 9], [45, 3], [67, 5], [78, 7], [38, 2]]
y_train = ['pass', 'pass', 'fail', 'pass', 'pass', 'fail']

# Train a Decision Tree
clf = DecisionTreeClassifier()
clf.fit(X_train, y_train)

# Predict
X_test = [[70, 6], [40, 3]]
predictions = clf.predict(X_test)
print(predictions)  # ['pass', 'fail']</code></pre>
<h5>Common Classification Algorithms</h5>
<table class="reading-table">
<tr><th>Algorithm</th><th>Best For</th><th>Pros</th></tr>
<tr><td>Logistic Regression</td><td>Binary classification</td><td>Simple, interpretable, fast</td></tr>
<tr><td>Decision Trees</td><td>Interpretable rules</td><td>Easy to visualize and explain</td></tr>
<tr><td>Random Forest</td><td>General purpose</td><td>High accuracy, handles noise</td></tr>
<tr><td>SVM</td><td>High-dimensional data</td><td>Effective with clear margins</td></tr>
</table>` }
  ]
},
{
  module: 5, title: 'Introduction to Neural Networks',
  sections: [
    { heading: 'How Neural Networks Work',
      content: `<p>A <strong>neural network</strong> is inspired by the human brain. It consists of layers of interconnected nodes (neurons) that process data:</p>
<ul>
<li><strong>Input Layer:</strong> Receives the raw data (features)</li>
<li><strong>Hidden Layers:</strong> Process and transform the data through weighted connections</li>
<li><strong>Output Layer:</strong> Produces the final prediction</li>
</ul>
<p>Each connection has a <strong>weight</strong> that gets adjusted during training. The network learns by:</p>
<ol>
<li><strong>Forward Pass:</strong> Data flows through the network to produce a prediction</li>
<li><strong>Loss Calculation:</strong> Compare prediction to actual answer</li>
<li><strong>Backpropagation:</strong> Calculate how much each weight contributed to the error</li>
<li><strong>Weight Update:</strong> Adjust weights to reduce error (gradient descent)</li>
</ol>
<div class="reading-callout"><h5>Activation Functions</h5><p>Activation functions introduce non-linearity, allowing networks to learn complex patterns. Common ones: <strong>ReLU</strong> (hidden layers), <strong>Sigmoid</strong> (binary output), <strong>Softmax</strong> (multi-class output).</p></div>` },
    { heading: 'Building a Neural Network with Keras',
      content: `<pre><code>import tensorflow as tf
from tensorflow import keras

# Build a simple neural network
model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    keras.layers.Dropout(0.2),         # Prevent overfitting
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dense(10, activation='softmax')  # 10 classes
])

# Compile
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train
model.fit(X_train, y_train, epochs=10, validation_split=0.2)

# Evaluate
test_loss, test_acc = model.evaluate(X_test, y_test)
print(f"Test accuracy: {test_acc:.2%}")</code></pre>
<div class="reading-callout"><h5>Key Takeaway</h5><p>Neural networks excel at complex pattern recognition (images, text, audio) but require large datasets and significant computing power. For simpler problems, traditional ML algorithms are often more practical and interpretable.</p></div>` }
  ]
}
];
