// Databases Intro course notes
courseNotes['databases-intro'] = [
{
  module: 1, title: 'Database Fundamentals',
  sections: [
    { heading: 'What is a Database?',
      content: `<p>A <strong>database</strong> is an organized collection of structured data stored electronically. Databases allow you to efficiently store, retrieve, update, and manage large amounts of information.</p>
<p>Before databases, data was stored in flat files (like spreadsheets). This caused problems with data redundancy, inconsistency, and difficulty in accessing related data. Databases solve these problems.</p>
<h5>Database Management Systems (DBMS)</h5>
<p>A <strong>DBMS</strong> is software that interacts with the database on your behalf. Popular DBMS options include:</p>
<table class="reading-table">
<tr><th>DBMS</th><th>Type</th><th>Best For</th></tr>
<tr><td>MySQL</td><td>Relational</td><td>Web applications, WordPress</td></tr>
<tr><td>PostgreSQL</td><td>Relational</td><td>Complex queries, data integrity</td></tr>
<tr><td>SQLite</td><td>Relational</td><td>Mobile apps, embedded, prototyping</td></tr>
<tr><td>MongoDB</td><td>Document (NoSQL)</td><td>Flexible schemas, JSON data</td></tr>
<tr><td>Redis</td><td>Key-Value (NoSQL)</td><td>Caching, real-time data</td></tr>
</table>` },
    { heading: 'Relational Database Concepts',
      content: `<p>A <strong>relational database</strong> organizes data into <strong>tables</strong> (also called relations) with rows and columns, similar to a spreadsheet but much more powerful.</p>
<h5>Key Terminology</h5>
<ul>
<li><strong>Table:</strong> A collection of related data organized in rows and columns (e.g., a "students" table)</li>
<li><strong>Row (Record/Tuple):</strong> A single entry in a table (e.g., one student)</li>
<li><strong>Column (Field/Attribute):</strong> A specific piece of data (e.g., "name", "email", "age")</li>
<li><strong>Primary Key:</strong> A unique identifier for each row (e.g., student_id). No two rows can have the same primary key.</li>
<li><strong>Foreign Key:</strong> A column that references the primary key of another table, creating a relationship between tables.</li>
</ul>
<pre><code>-- Example: Students Table
+----+--------+-----+------------------+
| id | name   | age | email            |
+----+--------+-----+------------------+
| 1  | Alice  | 20  | alice@email.com  |
| 2  | Bob    | 22  | bob@email.com    |
| 3  | Carol  | 21  | carol@email.com  |
+----+--------+-----+------------------+
      Primary Key: id</code></pre>
<div class="reading-callout"><h5>Why Relational?</h5><p>Tables can be "related" to each other through keys. A student can be linked to their enrolled courses through a foreign key, avoiding data duplication and keeping data consistent.</p></div>` }
  ]
},
{
  module: 2, title: 'SQL Basics',
  sections: [
    { heading: 'Introduction to SQL',
      content: `<p><strong>SQL (Structured Query Language)</strong> is the standard language for communicating with relational databases. It lets you create, read, update, and delete data — known as <strong>CRUD</strong> operations.</p>
<h5>Creating Tables</h5>
<pre><code>CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    age INT CHECK (age >= 16),
    enrollment_date DATE DEFAULT CURRENT_DATE
);</code></pre>
<h5>Inserting Data</h5>
<pre><code>INSERT INTO students (name, email, age)
VALUES ('Alice Johnson', 'alice@email.com', 20);

INSERT INTO students (name, email, age)
VALUES ('Bob Smith', 'bob@email.com', 22),
       ('Carol Davis', 'carol@email.com', 21);</code></pre>` },
    { heading: 'Querying Data with SELECT',
      content: `<p>The <code>SELECT</code> statement is the most commonly used SQL command. It retrieves data from one or more tables.</p>
<pre><code>-- Select all columns
SELECT * FROM students;

-- Select specific columns
SELECT name, email FROM students;

-- Filter with WHERE
SELECT * FROM students WHERE age > 20;

-- Sort results
SELECT * FROM students ORDER BY name ASC;

-- Limit results
SELECT * FROM students LIMIT 10;

-- Combine conditions
SELECT * FROM students
WHERE age >= 20 AND enrollment_date > '2024-01-01'
ORDER BY age DESC;</code></pre>
<h5>Aggregate Functions</h5>
<pre><code>SELECT COUNT(*) FROM students;              -- Total count
SELECT AVG(age) FROM students;               -- Average age
SELECT MAX(age), MIN(age) FROM students;     -- Max and Min
SELECT age, COUNT(*) FROM students
GROUP BY age
HAVING COUNT(*) > 1;                         -- Groups with count > 1</code></pre>
<div class="reading-callout"><h5>SQL is Declarative</h5><p>You tell SQL <strong>what</strong> data you want, not <strong>how</strong> to get it. The database engine figures out the most efficient way to retrieve your data. This is why SQL remains powerful even with billions of rows.</p></div>` }
  ]
},
{
  module: 3, title: 'Database Design',
  sections: [
    { heading: 'Entity-Relationship Modeling',
      content: `<p>Before building a database, you should design its structure. <strong>Entity-Relationship (ER) diagrams</strong> visually represent the data and relationships.</p>
<h5>Key Concepts</h5>
<ul>
<li><strong>Entity:</strong> A real-world object or concept (Student, Course, Instructor)</li>
<li><strong>Attribute:</strong> A property of an entity (name, email, age)</li>
<li><strong>Relationship:</strong> How entities are connected (a Student "enrolls in" a Course)</li>
</ul>
<h5>Relationship Types</h5>
<table class="reading-table">
<tr><th>Type</th><th>Description</th><th>Example</th></tr>
<tr><td>One-to-One (1:1)</td><td>Each entity in A relates to exactly one in B</td><td>Person → Passport</td></tr>
<tr><td>One-to-Many (1:N)</td><td>One entity in A relates to many in B</td><td>Teacher → Students</td></tr>
<tr><td>Many-to-Many (M:N)</td><td>Many in A relate to many in B</td><td>Students → Courses</td></tr>
</table>
<p>Many-to-many relationships require a <strong>junction table</strong> (also called a bridge table):</p>
<pre><code>-- Junction table for Students ↔ Courses
CREATE TABLE enrollments (
    student_id INT REFERENCES students(id),
    course_id INT REFERENCES courses(id),
    enrolled_date DATE,
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id)
);</code></pre>` },
    { heading: 'Normalization',
      content: `<p><strong>Normalization</strong> is the process of organizing data to minimize redundancy and dependency. It involves dividing large tables into smaller, related tables.</p>
<h5>Normal Forms</h5>
<ul>
<li><strong>1NF (First Normal Form):</strong> Each column contains only atomic (indivisible) values. No repeating groups.</li>
<li><strong>2NF (Second Normal Form):</strong> Meet 1NF + every non-key column depends on the entire primary key (not just part of it).</li>
<li><strong>3NF (Third Normal Form):</strong> Meet 2NF + no non-key column depends on another non-key column (no transitive dependencies).</li>
</ul>
<h5>Example: Before Normalization</h5>
<pre><code>-- BAD: Unnormalized (data redundancy)
| student | course  | instructor | instructor_email     |
|---------|---------|------------|----------------------|
| Alice   | Python  | Dr. Chen   | chen@university.edu  |
| Bob     | Python  | Dr. Chen   | chen@university.edu  |  ← duplicated!
| Alice   | Web Dev | Prof. Kim  | kim@university.edu   |</code></pre>
<h5>After Normalization: 3 separate tables</h5>
<pre><code>-- Students table, Courses table, Enrollments table
-- Each piece of data stored only once
-- Related through foreign keys</code></pre>
<div class="reading-callout"><h5>Rule of Thumb</h5><p>Aim for 3NF in most applications. It provides a good balance between eliminating redundancy and maintaining query simplicity. Over-normalizing can make queries unnecessarily complex.</p></div>` }
  ]
},
{
  module: 4, title: 'Advanced SQL',
  sections: [
    { heading: 'JOIN Operations',
      content: `<p><strong>JOINs</strong> combine rows from two or more tables based on a related column. They're essential for working with normalized databases.</p>
<pre><code>-- INNER JOIN: Only matching rows from both tables
SELECT s.name, c.title, e.grade
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON c.id = e.course_id;

-- LEFT JOIN: All rows from left table + matching from right
SELECT s.name, e.course_id
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id;
-- Shows ALL students, even those not enrolled in any course

-- RIGHT JOIN: All from right table + matching from left
-- FULL OUTER JOIN: All rows from both tables</code></pre>
<table class="reading-table">
<tr><th>JOIN Type</th><th>Returns</th></tr>
<tr><td><code>INNER JOIN</code></td><td>Only rows with matches in both tables</td></tr>
<tr><td><code>LEFT JOIN</code></td><td>All rows from left table + matches from right</td></tr>
<tr><td><code>RIGHT JOIN</code></td><td>All rows from right table + matches from left</td></tr>
<tr><td><code>FULL OUTER JOIN</code></td><td>All rows from both tables</td></tr>
<tr><td><code>CROSS JOIN</code></td><td>Every combination of rows (Cartesian product)</td></tr>
</table>` },
    { heading: 'Subqueries and Views',
      content: `<p><strong>Subqueries</strong> are queries nested inside other queries. They let you build complex logic step by step.</p>
<pre><code>-- Find students older than the average age
SELECT name, age FROM students
WHERE age > (SELECT AVG(age) FROM students);

-- Find students enrolled in 'Python' course
SELECT name FROM students
WHERE id IN (
    SELECT student_id FROM enrollments
    WHERE course_id = (SELECT id FROM courses WHERE title = 'Python')
);</code></pre>
<h5>Views</h5>
<p>A <strong>view</strong> is a virtual table based on a SELECT query. It doesn't store data itself but provides a convenient way to access complex queries.</p>
<pre><code>CREATE VIEW student_grades AS
SELECT s.name, c.title, e.grade
FROM students s
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON c.id = e.course_id;

-- Now use it like a table
SELECT * FROM student_grades WHERE grade = 'A';</code></pre>
<div class="reading-callout"><h5>Performance Tip</h5><p>Use <strong>indexes</strong> on columns frequently used in WHERE clauses and JOINs. Indexes dramatically speed up queries on large tables: <code>CREATE INDEX idx_name ON students(name);</code></p></div>` }
  ]
},
{
  module: 5, title: 'NoSQL Introduction',
  sections: [
    { heading: 'What is NoSQL?',
      content: `<p><strong>NoSQL</strong> ("Not Only SQL") databases are designed for specific data models and have flexible schemas. They excel at handling large volumes of unstructured or semi-structured data.</p>
<h5>Types of NoSQL Databases</h5>
<table class="reading-table">
<tr><th>Type</th><th>Data Model</th><th>Example</th><th>Use Case</th></tr>
<tr><td><strong>Document</strong></td><td>JSON-like documents</td><td>MongoDB, CouchDB</td><td>Content management, user profiles</td></tr>
<tr><td><strong>Key-Value</strong></td><td>Simple key-value pairs</td><td>Redis, DynamoDB</td><td>Caching, session storage</td></tr>
<tr><td><strong>Column-Family</strong></td><td>Columns grouped in families</td><td>Cassandra, HBase</td><td>Time-series data, IoT</td></tr>
<tr><td><strong>Graph</strong></td><td>Nodes and edges</td><td>Neo4j, ArangoDB</td><td>Social networks, recommendations</td></tr>
</table>
<h5>MongoDB Example</h5>
<pre><code>// MongoDB stores data as JSON-like documents
db.students.insertOne({
    name: "Alice Johnson",
    age: 20,
    email: "alice@email.com",
    courses: ["Python", "Web Dev"],  // Embedded array
    address: {                        // Nested object
        city: "New York",
        state: "NY"
    }
});

// Query
db.students.find({ age: { $gte: 20 } });
db.students.find({ courses: "Python" });</code></pre>` },
    { heading: 'SQL vs NoSQL: When to Use Which',
      content: `<table class="reading-table">
<tr><th>Criteria</th><th>SQL (Relational)</th><th>NoSQL</th></tr>
<tr><td>Data Structure</td><td>Structured, fixed schema</td><td>Flexible, dynamic schema</td></tr>
<tr><td>Relationships</td><td>Complex relationships (JOINs)</td><td>Simple or embedded relationships</td></tr>
<tr><td>Scalability</td><td>Vertical (bigger server)</td><td>Horizontal (more servers)</td></tr>
<tr><td>Consistency</td><td>Strong (ACID transactions)</td><td>Eventual (BASE model)</td></tr>
<tr><td>Best For</td><td>Banking, ERP, structured data</td><td>Real-time apps, big data, IoT</td></tr>
</table>
<div class="reading-callout"><h5>Key Takeaway</h5><p>There's no "best" database — only the best database for your use case. Many modern applications use <strong>both</strong> SQL and NoSQL databases together (polyglot persistence). Use SQL for transactional data and NoSQL for caching, search, or flexible content.</p></div>` }
  ]
}
];
