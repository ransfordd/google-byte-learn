// Course Notes - Detailed Reading Content for All Courses
const courseNotes = {};

// ============================================================
// PYTHON PROGRAMMING COURSE NOTES
// ============================================================
courseNotes['python-programming'] = [
{
  module: 1,
  title: 'Getting Started with Python',
  sections: [
    {
      heading: 'What is Python?',
      content: `<p>Python is a high-level, interpreted programming language created by <strong>Guido van Rossum</strong> and first released in 1991. It emphasizes code readability with its use of significant indentation and a clean, expressive syntax that lets you write programs in fewer lines than languages like C++ or Java.</p>
<p>Python is <strong>dynamically typed</strong>, meaning you don't need to declare variable types explicitly. It supports multiple programming paradigms including procedural, object-oriented, and functional programming.</p>
<div class="reading-callout"><h5>Why "Python"?</h5><p>The language is named after the British comedy group Monty Python, not the snake! Guido van Rossum was a fan of their show "Monty Python's Flying Circus."</p></div>`
    },
    {
      heading: 'Why Learn Python?',
      content: `<p>Python has consistently ranked among the top programming languages in the world. Here's why:</p>
<ul>
<li><strong>Beginner-Friendly:</strong> Python's clean syntax reads almost like English, making it the ideal first programming language.</li>
<li><strong>Versatile:</strong> Used in web development (Django, Flask), data science (Pandas, NumPy), AI/ML (TensorFlow, PyTorch), automation, game development, and more.</li>
<li><strong>Massive Ecosystem:</strong> Over 400,000 packages on PyPI (Python Package Index) for virtually any task.</li>
<li><strong>High Demand:</strong> Python developers earn competitive salaries, with average salaries ranging from $80,000 to $130,000+ depending on specialization.</li>
<li><strong>Community Support:</strong> One of the largest developer communities, meaning extensive documentation, tutorials, and forums.</li>
</ul>`
    },
    {
      heading: 'Setting Up Your Environment',
      content: `<p>To start coding in Python, you need two things: the Python interpreter and a code editor.</p>
<h5>Installing Python</h5>
<ol>
<li>Visit <strong>python.org/downloads</strong> and download the latest version (Python 3.12+).</li>
<li>During installation on Windows, <strong>check "Add Python to PATH"</strong> — this is crucial!</li>
<li>Verify installation by opening a terminal and typing:</li>
</ol>
<pre><code>python --version
# Output: Python 3.12.x</code></pre>
<h5>Choosing a Code Editor</h5>
<table class="reading-table">
<tr><th>Editor</th><th>Best For</th><th>Cost</th></tr>
<tr><td>VS Code</td><td>General development, extensions</td><td>Free</td></tr>
<tr><td>PyCharm</td><td>Professional Python development</td><td>Free Community / Paid Pro</td></tr>
<tr><td>IDLE</td><td>Quick scripts, comes with Python</td><td>Free</td></tr>
<tr><td>Jupyter Notebook</td><td>Data science, experimentation</td><td>Free</td></tr>
</table>
<div class="reading-callout"><h5>Recommendation</h5><p>We recommend <strong>VS Code</strong> with the Python extension for beginners. It's free, lightweight, and has excellent Python support including IntelliSense, debugging, and integrated terminal.</p></div>`
    },
    {
      heading: 'Your First Python Program',
      content: `<p>Let's write and understand the classic "Hello, World!" program:</p>
<pre><code># This is a comment - Python ignores lines starting with #
print("Hello, World!")

# You can also use single quotes
print('Welcome to Python!')</code></pre>
<p>The <code>print()</code> function outputs text to the console. It's one of Python's built-in functions that you'll use constantly.</p>
<h5>Running Your Program</h5>
<ol>
<li>Save your file with a <code>.py</code> extension (e.g., <code>hello.py</code>)</li>
<li>Open a terminal in the file's directory</li>
<li>Run: <code>python hello.py</code></li>
</ol>
<h5>Python Interactive Mode (REPL)</h5>
<p>You can also run Python interactively by typing <code>python</code> in your terminal:</p>
<pre><code>>>> 2 + 3
5
>>> print("Hello!")
Hello!
>>> exit()</code></pre>
<div class="reading-callout"><h5>Key Takeaway</h5><p>Python's simplicity is its superpower. A single line of code — <code>print("Hello, World!")</code> — does what takes 5+ lines in languages like Java or C++. This simplicity extends throughout the language.</p></div>`
    }
  ]
},
{
  module: 2,
  title: 'Variables & Data Types',
  sections: [
    {
      heading: 'Understanding Variables',
      content: `<p>A <strong>variable</strong> is a named container that stores a value in your computer's memory. Think of it as a labeled box where you can put data and retrieve it later using the label.</p>
<pre><code># Creating variables - no type declaration needed!
name = "Alice"
age = 25
height = 5.7
is_student = True

# Python figures out the type automatically
print(name)      # Output: Alice
print(type(age)) # Output: &lt;class 'int'&gt;</code></pre>
<h5>Variable Naming Rules</h5>
<ul>
<li>Must start with a letter or underscore (<code>_</code>)</li>
<li>Can contain letters, numbers, and underscores</li>
<li>Case-sensitive: <code>Name</code>, <code>name</code>, and <code>NAME</code> are different variables</li>
<li>Cannot use Python reserved words (like <code>if</code>, <code>for</code>, <code>class</code>)</li>
</ul>
<pre><code># Good variable names (use snake_case in Python)
user_name = "Bob"
total_score = 95
max_retry_count = 3

# Bad variable names
# 2name = "Error"   # Can't start with number
# my-var = 10       # Hyphens not allowed
# class = "Math"    # 'class' is reserved</code></pre>
<div class="reading-callout"><h5>Convention</h5><p>Python uses <strong>snake_case</strong> for variable and function names (words separated by underscores). This is defined in PEP 8, Python's style guide.</p></div>`
    },
    {
      heading: 'Numbers: Integers and Floats',
      content: `<p>Python has two main numeric types:</p>
<table class="reading-table">
<tr><th>Type</th><th>Description</th><th>Examples</th></tr>
<tr><td><code>int</code></td><td>Whole numbers (no decimals)</td><td><code>42</code>, <code>-7</code>, <code>0</code>, <code>1000000</code></td></tr>
<tr><td><code>float</code></td><td>Decimal numbers</td><td><code>3.14</code>, <code>-0.5</code>, <code>2.0</code></td></tr>
</table>
<h5>Arithmetic Operations</h5>
<pre><code># Basic math
a = 15
b = 4

print(a + b)   # Addition: 19
print(a - b)   # Subtraction: 11
print(a * b)   # Multiplication: 60
print(a / b)   # Division: 3.75 (always returns float)
print(a // b)  # Floor division: 3 (rounds down)
print(a % b)   # Modulo (remainder): 3
print(a ** b)  # Exponentiation: 50625 (15^4)</code></pre>
<div class="reading-callout"><h5>Important</h5><p>Division with <code>/</code> always returns a float, even if the result is a whole number. Use <code>//</code> for integer division.</p></div>`
    },
    {
      heading: 'Strings',
      content: `<p>Strings are sequences of characters enclosed in quotes. Python treats single and double quotes identically.</p>
<pre><code># Creating strings
greeting = "Hello, World!"
name = 'Alice'
multiline = """This is a
multi-line string that
spans several lines."""

# String concatenation
full_name = "John" + " " + "Doe"  # "John Doe"

# String repetition
divider = "-" * 30  # "------------------------------"

# f-strings (formatted strings) - Python 3.6+
age = 25
message = f"My name is {name} and I am {age} years old."
print(message)  # My name is Alice and I am 25 years old.</code></pre>
<h5>Common String Methods</h5>
<pre><code>text = "  Hello, Python World!  "

text.strip()        # "Hello, Python World!" (removes whitespace)
text.lower()        # "  hello, python world!  "
text.upper()        # "  HELLO, PYTHON WORLD!  "
text.replace("Python", "Coding")  # "  Hello, Coding World!  "
text.split(",")     # ["  Hello", " Python World!  "]
len(text)           # 25 (length of string)</code></pre>
<h5>String Indexing and Slicing</h5>
<pre><code>word = "Python"
#        P  y  t  h  o  n
# Index: 0  1  2  3  4  5

print(word[0])     # P (first character)
print(word[-1])    # n (last character)
print(word[0:3])   # Pyt (characters 0, 1, 2)
print(word[2:])    # thon (from index 2 to end)
print(word[:3])    # Pyt (from start to index 2)</code></pre>`
    },
    {
      heading: 'Booleans and Type Conversion',
      content: `<p><strong>Booleans</strong> represent truth values: <code>True</code> or <code>False</code>. They're essential for decision-making in programs.</p>
<pre><code># Boolean values
is_active = True
is_admin = False

# Comparison operators return booleans
print(5 > 3)      # True
print(10 == 20)    # False
print("a" != "b")  # True

# Logical operators
print(True and False)  # False
print(True or False)   # True
print(not True)        # False</code></pre>
<h5>Type Conversion</h5>
<p>You can convert between types using built-in functions:</p>
<pre><code># String to number
age_str = "25"
age_int = int(age_str)     # 25 (integer)
price = float("19.99")     # 19.99 (float)

# Number to string
score = 100
score_str = str(score)     # "100"

# Getting user input (always returns a string!)
user_input = input("Enter your age: ")
age = int(user_input)  # Convert to integer for math</code></pre>
<div class="reading-callout reading-warning"><h5>Common Pitfall</h5><p>The <code>input()</code> function always returns a string. If you need a number, you must convert it with <code>int()</code> or <code>float()</code>, or you'll get unexpected results with math operations.</p></div>`
    }
  ]
},
{
  module: 3,
  title: 'Control Flow',
  sections: [
    {
      heading: 'Conditional Statements',
      content: `<p>Conditional statements let your program make decisions. Python uses <code>if</code>, <code>elif</code> (else if), and <code>else</code> keywords.</p>
<pre><code># Basic if statement
temperature = 35

if temperature > 30:
    print("It's hot outside!")
elif temperature > 20:
    print("It's a nice day.")
elif temperature > 10:
    print("It's cool outside.")
else:
    print("It's cold!")</code></pre>
<p><strong>Indentation matters!</strong> Python uses indentation (4 spaces) to define code blocks instead of curly braces like other languages.</p>
<h5>Comparison Operators</h5>
<table class="reading-table">
<tr><th>Operator</th><th>Meaning</th><th>Example</th></tr>
<tr><td><code>==</code></td><td>Equal to</td><td><code>5 == 5</code> → True</td></tr>
<tr><td><code>!=</code></td><td>Not equal to</td><td><code>5 != 3</code> → True</td></tr>
<tr><td><code>&gt;</code></td><td>Greater than</td><td><code>5 &gt; 3</code> → True</td></tr>
<tr><td><code>&lt;</code></td><td>Less than</td><td><code>3 &lt; 5</code> → True</td></tr>
<tr><td><code>&gt;=</code></td><td>Greater or equal</td><td><code>5 &gt;= 5</code> → True</td></tr>
<tr><td><code>&lt;=</code></td><td>Less or equal</td><td><code>3 &lt;= 5</code> → True</td></tr>
</table>
<h5>Combining Conditions</h5>
<pre><code>age = 20
has_id = True

# Using 'and' - both conditions must be True
if age >= 18 and has_id:
    print("Access granted")

# Using 'or' - at least one condition must be True
if age < 13 or age > 65:
    print("Discounted ticket")

# Using 'not' - inverts the condition
if not has_id:
    print("ID required")</code></pre>`
    },
    {
      heading: 'For Loops',
      content: `<p>A <code>for</code> loop iterates over a sequence (list, string, range, etc.) and executes a block of code for each element.</p>
<pre><code># Looping through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# Using range() for numeric loops
for i in range(5):       # 0, 1, 2, 3, 4
    print(i)

for i in range(2, 8):    # 2, 3, 4, 5, 6, 7
    print(i)

for i in range(0, 10, 2): # 0, 2, 4, 6, 8 (step of 2)
    print(i)

# Looping through a string
for char in "Python":
    print(char)  # P, y, t, h, o, n</code></pre>
<h5>Useful Loop Patterns</h5>
<pre><code># enumerate() - get index and value
colors = ["red", "green", "blue"]
for index, color in enumerate(colors):
    print(f"{index}: {color}")
# 0: red
# 1: green
# 2: blue

# Nested loops
for i in range(3):
    for j in range(3):
        print(f"({i}, {j})", end=" ")
    print()  # New line after inner loop</code></pre>`
    },
    {
      heading: 'While Loops',
      content: `<p>A <code>while</code> loop repeats a block of code as long as a condition is <code>True</code>.</p>
<pre><code># Basic while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1  # Don't forget to update the condition!

# User input validation loop
while True:
    password = input("Enter password: ")
    if len(password) >= 8:
        print("Password accepted!")
        break
    print("Password must be at least 8 characters.")</code></pre>
<div class="reading-callout reading-warning"><h5>Infinite Loop Warning</h5><p>Always ensure your while loop condition will eventually become <code>False</code>, or use <code>break</code> to exit. An infinite loop will freeze your program. If stuck, press <code>Ctrl+C</code> to stop it.</p></div>`
    },
    {
      heading: 'Break, Continue, and Pass',
      content: `<p>These keywords give you fine-grained control over loop execution:</p>
<pre><code># break - exits the loop immediately
for num in range(10):
    if num == 5:
        break       # Stop at 5
    print(num)      # Prints: 0, 1, 2, 3, 4

# continue - skips to the next iteration
for num in range(10):
    if num % 2 == 0:
        continue    # Skip even numbers
    print(num)      # Prints: 1, 3, 5, 7, 9

# pass - does nothing (placeholder)
for num in range(5):
    if num == 3:
        pass  # TODO: handle this case later
    print(num)  # Prints all numbers 0-4</code></pre>
<div class="reading-callout"><h5>Key Takeaway</h5><p>Use <code>break</code> to exit a loop early, <code>continue</code> to skip an iteration, and <code>pass</code> as a placeholder when you need a statement syntactically but don't want to do anything yet.</p></div>`
    }
  ]
},
{
  module: 4,
  title: 'Functions',
  sections: [
    {
      heading: 'Defining and Calling Functions',
      content: `<p>Functions are reusable blocks of code that perform a specific task. They help you organize code, avoid repetition, and make programs easier to read and maintain.</p>
<pre><code># Defining a function
def greet(name):
    """Greets a person by name."""  # Docstring
    print(f"Hello, {name}! Welcome!")

# Calling a function
greet("Alice")   # Hello, Alice! Welcome!
greet("Bob")     # Hello, Bob! Welcome!

# Function with no parameters
def display_menu():
    print("1. Start Game")
    print("2. Settings")
    print("3. Quit")

display_menu()</code></pre>
<div class="reading-callout"><h5>Best Practice</h5><p>Always add a <strong>docstring</strong> (triple-quoted string) as the first line inside your function to describe what it does. This serves as built-in documentation.</p></div>`
    },
    {
      heading: 'Parameters, Arguments, and Return Values',
      content: `<p><strong>Parameters</strong> are variables listed in the function definition. <strong>Arguments</strong> are the actual values passed when calling the function.</p>
<pre><code># Multiple parameters
def add(a, b):
    return a + b

result = add(5, 3)  # result = 8

# Default parameters
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))              # Hello, Alice!
print(greet("Bob", "Good morning")) # Good morning, Bob!

# Keyword arguments
def create_profile(name, age, city):
    return f"{name}, {age}, from {city}"

# Can pass in any order using keywords
profile = create_profile(age=30, city="NYC", name="Alice")

# Returning multiple values
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

low, high, average = get_stats([10, 20, 30, 40, 50])
print(f"Min: {low}, Max: {high}, Avg: {average}")</code></pre>`
    },
    {
      heading: 'Scope and Lifetime',
      content: `<p><strong>Scope</strong> determines where a variable can be accessed. Python has two main scopes:</p>
<ul>
<li><strong>Local scope:</strong> Variables defined inside a function — only accessible within that function</li>
<li><strong>Global scope:</strong> Variables defined outside all functions — accessible everywhere</li>
</ul>
<pre><code>total = 0  # Global variable

def add_to_total(value):
    global total           # Declare we're using the global variable
    local_var = value * 2  # Local variable
    total += local_var

add_to_total(5)
print(total)       # 10
# print(local_var) # ERROR: local_var is not defined here</code></pre>
<div class="reading-callout reading-warning"><h5>Avoid Global Variables</h5><p>While <code>global</code> works, it's generally better to pass values as parameters and return results. Global variables make code harder to debug and test.</p></div>
<h5>Lambda Functions</h5>
<p>Small, anonymous functions defined in one line:</p>
<pre><code># Lambda syntax: lambda parameters: expression
square = lambda x: x ** 2
print(square(5))  # 25

# Useful with built-in functions
numbers = [3, 1, 4, 1, 5, 9]
sorted_nums = sorted(numbers, key=lambda x: -x)  # Sort descending
print(sorted_nums)  # [9, 5, 4, 3, 1, 1]</code></pre>`
    }
  ]
},
{
  module: 5,
  title: 'Data Structures',
  sections: [
    {
      heading: 'Lists',
      content: `<p>A <strong>list</strong> is an ordered, mutable (changeable) collection that can hold items of any type. Lists are one of Python's most versatile data structures.</p>
<pre><code># Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]
empty = []

# Accessing elements
print(fruits[0])    # apple (first)
print(fruits[-1])   # cherry (last)
print(fruits[1:3])  # ["banana", "cherry"] (slice)

# Modifying lists
fruits.append("date")       # Add to end
fruits.insert(1, "avocado") # Insert at index 1
fruits.remove("banana")     # Remove first occurrence
popped = fruits.pop()       # Remove and return last item
fruits[0] = "apricot"       # Replace by index

# Useful list operations
print(len(fruits))          # Length
print("cherry" in fruits)   # Check membership: True/False
fruits.sort()               # Sort in place
fruits.reverse()            # Reverse in place</code></pre>`
    },
    {
      heading: 'Tuples and Sets',
      content: `<p><strong>Tuples</strong> are like lists but <strong>immutable</strong> (cannot be changed after creation). Use them for data that shouldn't be modified.</p>
<pre><code># Tuples - use parentheses
coordinates = (10, 20)
rgb_color = (255, 128, 0)

x, y = coordinates  # Tuple unpacking
print(x)  # 10

# Tuples are immutable
# coordinates[0] = 30  # ERROR: TypeError</code></pre>
<p><strong>Sets</strong> are unordered collections of <strong>unique</strong> elements. They're great for removing duplicates and set operations.</p>
<pre><code># Sets - use curly braces
colors = {"red", "green", "blue"}
numbers = {1, 2, 2, 3, 3, 3}  # Duplicates removed: {1, 2, 3}

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)   # Union: {1, 2, 3, 4, 5, 6}
print(a & b)   # Intersection: {3, 4}
print(a - b)   # Difference: {1, 2}

# Remove duplicates from a list
names = ["Alice", "Bob", "Alice", "Charlie", "Bob"]
unique = list(set(names))  # ["Alice", "Bob", "Charlie"]</code></pre>`
    },
    {
      heading: 'Dictionaries',
      content: `<p>A <strong>dictionary</strong> stores data as <strong>key-value pairs</strong>. Think of it as a real dictionary where words (keys) map to definitions (values).</p>
<pre><code># Creating a dictionary
student = {
    "name": "Alice",
    "age": 20,
    "courses": ["Python", "Math"],
    "gpa": 3.8
}

# Accessing values
print(student["name"])        # Alice
print(student.get("email", "N/A"))  # N/A (default if key missing)

# Modifying
student["age"] = 21           # Update value
student["email"] = "a@b.com"  # Add new key-value pair
del student["gpa"]            # Delete a key

# Iterating over dictionaries
for key, value in student.items():
    print(f"{key}: {value}")

# Dictionary comprehension
squares = {x: x**2 for x in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</code></pre>
<div class="reading-callout"><h5>When to Use Which?</h5><p><strong>List:</strong> Ordered collection, duplicates OK. <strong>Tuple:</strong> Immutable ordered collection. <strong>Set:</strong> Unique elements, fast membership testing. <strong>Dictionary:</strong> Key-value mapping, fast lookups by key.</p></div>`
    },
    {
      heading: 'List Comprehensions',
      content: `<p>List comprehensions provide a concise way to create lists. They're one of Python's most powerful and Pythonic features.</p>
<pre><code># Traditional approach
squares = []
for x in range(10):
    squares.append(x ** 2)

# List comprehension - same result, one line!
squares = [x ** 2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition (filtering)
evens = [x for x in range(20) if x % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# With transformation and condition
words = ["Hello", "World", "Python", "AI"]
long_upper = [w.upper() for w in words if len(w) > 4]
# ["HELLO", "WORLD", "PYTHON"]

# Nested comprehension (flattening a matrix)
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
# [1, 2, 3, 4, 5, 6, 7, 8, 9]</code></pre>
<div class="reading-callout"><h5>Key Takeaway</h5><p>List comprehensions are powerful but don't overuse them. If a comprehension becomes hard to read, use a regular loop instead. Readability counts!</p></div>`
    }
  ]
}
];

// ============================================================
// WEB PROGRAMMING COURSE NOTES
// ============================================================
courseNotes['web-programming'] = [
{
  module: 1,
  title: 'HTML Fundamentals',
  sections: [
    {
      heading: 'What is HTML?',
      content: `<p><strong>HTML (HyperText Markup Language)</strong> is the standard language for creating web pages. It describes the structure and content of a page using a system of <strong>tags</strong> and <strong>elements</strong>.</p>
<p>HTML is not a programming language — it's a <strong>markup language</strong>. It tells the browser what content to display and how to structure it, but it doesn't perform logic or calculations.</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;p&gt;This is my first web page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<div class="reading-callout"><h5>Key Concept</h5><p>Every HTML document starts with <code>&lt;!DOCTYPE html&gt;</code> to tell the browser it's an HTML5 document. The <code>&lt;html&gt;</code> element is the root, containing <code>&lt;head&gt;</code> (metadata) and <code>&lt;body&gt;</code> (visible content).</p></div>`
    },
    {
      heading: 'Essential HTML Elements',
      content: `<p>HTML elements are the building blocks of a web page. Here are the most important ones:</p>
<h5>Text Elements</h5>
<pre><code>&lt;h1&gt;Main Heading&lt;/h1&gt;          &lt;!-- Heading levels h1-h6 --&gt;
&lt;h2&gt;Sub Heading&lt;/h2&gt;
&lt;p&gt;A paragraph of text.&lt;/p&gt;    &lt;!-- Paragraph --&gt;
&lt;strong&gt;Bold text&lt;/strong&gt;      &lt;!-- Important/bold --&gt;
&lt;em&gt;Italic text&lt;/em&gt;            &lt;!-- Emphasized/italic --&gt;
&lt;br&gt;                            &lt;!-- Line break --&gt;
&lt;hr&gt;                            &lt;!-- Horizontal rule --&gt;</code></pre>
<h5>Links and Images</h5>
<pre><code>&lt;!-- Hyperlink --&gt;
&lt;a href="https://example.com" target="_blank"&gt;Visit Example&lt;/a&gt;

&lt;!-- Image --&gt;
&lt;img src="photo.jpg" alt="Description of photo" width="400"&gt;</code></pre>
<h5>Lists</h5>
<pre><code>&lt;!-- Unordered list (bullets) --&gt;
&lt;ul&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Ordered list (numbered) --&gt;
&lt;ol&gt;
    &lt;li&gt;First step&lt;/li&gt;
    &lt;li&gt;Second step&lt;/li&gt;
&lt;/ol&gt;</code></pre>`
    },
    {
      heading: 'Semantic HTML',
      content: `<p><strong>Semantic HTML</strong> uses meaningful tags that describe the purpose of content, not just its appearance. This improves accessibility, SEO, and code readability.</p>
<pre><code>&lt;header&gt;       &lt;!-- Page or section header --&gt;
&lt;nav&gt;          &lt;!-- Navigation links --&gt;
&lt;main&gt;         &lt;!-- Main content of the page --&gt;
&lt;article&gt;      &lt;!-- Self-contained content --&gt;
&lt;section&gt;      &lt;!-- Thematic grouping --&gt;
&lt;aside&gt;        &lt;!-- Sidebar content --&gt;
&lt;footer&gt;       &lt;!-- Page or section footer --&gt;
&lt;figure&gt;       &lt;!-- Image with caption --&gt;
&lt;figcaption&gt;   &lt;!-- Caption for figure --&gt;</code></pre>
<table class="reading-table">
<tr><th>Instead of</th><th>Use</th><th>Why</th></tr>
<tr><td><code>&lt;div class="nav"&gt;</code></td><td><code>&lt;nav&gt;</code></td><td>Screen readers identify navigation</td></tr>
<tr><td><code>&lt;div class="header"&gt;</code></td><td><code>&lt;header&gt;</code></td><td>Clear document structure</td></tr>
<tr><td><code>&lt;div class="footer"&gt;</code></td><td><code>&lt;footer&gt;</code></td><td>Search engines understand layout</td></tr>
</table>
<div class="reading-callout"><h5>Accessibility Matters</h5><p>Semantic HTML helps screen readers navigate your page. Always use <code>alt</code> attributes on images and proper heading hierarchy (don't skip from h1 to h4).</p></div>`
    },
    {
      heading: 'Forms and Input',
      content: `<p>Forms collect user input and are essential for interactive web applications.</p>
<pre><code>&lt;form action="/submit" method="POST"&gt;
    &lt;label for="name"&gt;Name:&lt;/label&gt;
    &lt;input type="text" id="name" name="name" required&gt;

    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;

    &lt;label for="password"&gt;Password:&lt;/label&gt;
    &lt;input type="password" id="password" name="password" minlength="8"&gt;

    &lt;label for="message"&gt;Message:&lt;/label&gt;
    &lt;textarea id="message" name="message" rows="4"&gt;&lt;/textarea&gt;

    &lt;select name="role"&gt;
        &lt;option value="student"&gt;Student&lt;/option&gt;
        &lt;option value="teacher"&gt;Teacher&lt;/option&gt;
    &lt;/select&gt;

    &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
<p>HTML5 input types include: <code>text</code>, <code>email</code>, <code>password</code>, <code>number</code>, <code>date</code>, <code>tel</code>, <code>url</code>, <code>color</code>, <code>range</code>, <code>file</code>, and more. These provide built-in validation and specialized keyboards on mobile devices.</p>`
    }
  ]
},
{
  module: 2,
  title: 'CSS Styling',
  sections: [
    {
      heading: 'CSS Fundamentals',
      content: `<p><strong>CSS (Cascading Style Sheets)</strong> controls the visual presentation of HTML elements — colors, fonts, spacing, layout, and more.</p>
<h5>Three Ways to Add CSS</h5>
<pre><code>&lt;!-- 1. Inline (avoid) --&gt;
&lt;p style="color: blue;"&gt;Blue text&lt;/p&gt;

&lt;!-- 2. Internal (in &lt;head&gt;) --&gt;
&lt;style&gt;
    p { color: blue; }
&lt;/style&gt;

&lt;!-- 3. External (recommended) --&gt;
&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>
<h5>CSS Selectors</h5>
<pre><code>/* Element selector */
p { color: navy; }

/* Class selector (reusable) */
.highlight { background: yellow; }

/* ID selector (unique) */
#main-title { font-size: 2rem; }

/* Descendant selector */
.card p { margin-bottom: 1rem; }

/* Pseudo-classes */
a:hover { color: red; }
li:first-child { font-weight: bold; }</code></pre>`
    },
    {
      heading: 'The Box Model',
      content: `<p>Every HTML element is a rectangular box with four layers:</p>
<ol>
<li><strong>Content</strong> — The actual text, image, or other media</li>
<li><strong>Padding</strong> — Space between content and border</li>
<li><strong>Border</strong> — A line around the padding</li>
<li><strong>Margin</strong> — Space outside the border</li>
</ol>
<pre><code>.box {
    width: 300px;
    padding: 20px;        /* Inside spacing */
    border: 2px solid #333; /* Border */
    margin: 16px;          /* Outside spacing */
    box-sizing: border-box; /* Include padding/border in width */
}</code></pre>
<div class="reading-callout"><h5>Always Use border-box</h5><p>Add <code>*, *::before, *::after { box-sizing: border-box; }</code> at the top of your CSS. This makes width calculations include padding and border, which is much more intuitive.</p></div>`
    },
    {
      heading: 'Colors, Typography, and Spacing',
      content: `<p>CSS gives you fine control over visual properties:</p>
<pre><code>/* Colors - multiple formats */
.element {
    color: #4285f4;                /* Hex */
    background: rgb(66, 133, 244); /* RGB */
    border-color: hsl(217, 89%, 61%); /* HSL */
    opacity: 0.9;                  /* Transparency */
}

/* Typography */
body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;       /* Base size */
    line-height: 1.6;      /* Line spacing */
    letter-spacing: 0.5px; /* Character spacing */
}

h1 { font-size: 2.5rem; } /* Relative to base */
h2 { font-size: 2rem; }

/* Spacing with rem (relative to root font-size) */
.section {
    padding: 2rem;      /* 32px if base is 16px */
    margin-bottom: 1.5rem;
}</code></pre>`
    }
  ]
},
{
  module: 3,
  title: 'JavaScript Basics',
  sections: [
    {
      heading: 'Introduction to JavaScript',
      content: `<p><strong>JavaScript</strong> is the programming language of the web. While HTML provides structure and CSS provides style, JavaScript adds <strong>interactivity and dynamic behavior</strong>.</p>
<pre><code>// Variables
let name = "Alice";     // Can be reassigned
const PI = 3.14159;     // Cannot be reassigned
var oldWay = "avoid";   // Old syntax, use let/const instead

// Data types
let age = 25;            // Number
let greeting = "Hello";  // String
let isActive = true;     // Boolean
let items = [1, 2, 3];   // Array
let user = {              // Object
    name: "Bob",
    age: 30
};

// Functions
function add(a, b) {
    return a + b;
}

// Arrow functions (modern syntax)
const multiply = (a, b) =&gt; a * b;

console.log(add(5, 3));      // 8
console.log(multiply(4, 7)); // 28</code></pre>`
    },
    {
      heading: 'Control Flow and Loops',
      content: `<pre><code>// Conditionals
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C or below");
}

// Ternary operator (short if-else)
let status = age >= 18 ? "adult" : "minor";

// For loop
for (let i = 0; i &lt; 5; i++) {
    console.log(i);
}

// For...of (iterate over arrays)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

// Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n =&gt; n * 2);      // [2, 4, 6, 8, 10]
const evens = numbers.filter(n =&gt; n % 2 === 0); // [2, 4]
const sum = numbers.reduce((acc, n) =&gt; acc + n, 0); // 15</code></pre>
<div class="reading-callout"><h5>JavaScript vs Python</h5><p>JavaScript uses curly braces <code>{}</code> for blocks (Python uses indentation), semicolons to end statements (optional but recommended), and <code>===</code> for strict equality (Python uses <code>==</code>).</p></div>`
    }
  ]
},
{
  module: 4,
  title: 'DOM Manipulation',
  sections: [
    {
      heading: 'What is the DOM?',
      content: `<p>The <strong>DOM (Document Object Model)</strong> is a tree-like representation of your HTML page that JavaScript can interact with. Every HTML element becomes a "node" in this tree that you can select, modify, create, or delete.</p>
<pre><code>// Selecting elements
const title = document.getElementById("main-title");
const buttons = document.querySelectorAll(".btn");
const firstCard = document.querySelector(".card");

// Modifying content
title.textContent = "New Title";        // Change text
title.innerHTML = "&lt;em&gt;New Title&lt;/em&gt;"; // Change HTML

// Modifying styles
title.style.color = "blue";
title.style.fontSize = "2rem";

// Modifying classes (preferred over inline styles)
title.classList.add("active");
title.classList.remove("hidden");
title.classList.toggle("highlight");

// Modifying attributes
const link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
link.getAttribute("href");</code></pre>`
    },
    {
      heading: 'Events and Interactivity',
      content: `<p>Events let you respond to user actions like clicks, key presses, and form submissions.</p>
<pre><code>// Click event
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", function() {
    alert("Button clicked!");
});

// Arrow function syntax
btn.addEventListener("click", () =&gt; {
    console.log("Clicked!");
});

// Common events
// "click"      - Mouse click
// "mouseover"  - Mouse enters element
// "mouseout"   - Mouse leaves element
// "keydown"    - Key pressed
// "keyup"      - Key released
// "submit"     - Form submitted
// "input"      - Input value changes
// "scroll"     - Page scrolled
// "load"       - Page finished loading

// Form handling
const form = document.querySelector("form");
form.addEventListener("submit", (e) =&gt; {
    e.preventDefault();  // Stop page reload
    const name = document.querySelector("#name").value;
    console.log("Submitted:", name);
});</code></pre>
<div class="reading-callout"><h5>Key Takeaway</h5><p>Use <code>addEventListener</code> instead of inline event handlers (<code>onclick="..."</code>). It's cleaner, allows multiple handlers, and separates HTML from JavaScript.</p></div>`
    }
  ]
},
{
  module: 5,
  title: 'Responsive Design',
  sections: [
    {
      heading: 'Media Queries',
      content: `<p><strong>Responsive design</strong> ensures your website looks good on all screen sizes — phones, tablets, and desktops. Media queries are the foundation:</p>
<pre><code>/* Mobile-first approach (default styles for mobile) */
.container {
    width: 100%;
    padding: 1rem;
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }
}</code></pre>
<p>Always add the viewport meta tag in your HTML <code>&lt;head&gt;</code>:</p>
<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>`
    },
    {
      heading: 'Flexbox and Grid',
      content: `<p><strong>Flexbox</strong> is ideal for one-dimensional layouts (rows or columns):</p>
<pre><code>.navbar {
    display: flex;
    justify-content: space-between; /* Horizontal */
    align-items: center;            /* Vertical */
    gap: 1rem;
}

.card-container {
    display: flex;
    flex-wrap: wrap;    /* Wrap to next line */
    gap: 1.5rem;
}</code></pre>
<p><strong>CSS Grid</strong> is ideal for two-dimensional layouts (rows AND columns):</p>
<pre><code>.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    gap: 2rem;
}

/* Responsive grid */
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}</code></pre>
<div class="reading-callout"><h5>Rule of Thumb</h5><p>Use <strong>Flexbox</strong> for components (navbars, card rows, centering). Use <strong>Grid</strong> for page layouts (overall structure, complex grids). They work great together!</p></div>`
    }
  ]
}
];
