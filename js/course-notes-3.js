// Computer Fundamentals course notes
courseNotes['computer-fundamentals'] = [
{
  module: 1, title: 'Introduction to Computers',
  sections: [
    { heading: 'What is a Computer?',
      content: `<p>A <strong>computer</strong> is an electronic device that processes data according to a set of instructions (a program). At its core, every computer performs four basic operations:</p>
<ol>
<li><strong>Input:</strong> Receiving data (keyboard, mouse, microphone, sensors)</li>
<li><strong>Processing:</strong> Performing calculations and logic (CPU)</li>
<li><strong>Storage:</strong> Saving data for later use (RAM, hard drive, SSD)</li>
<li><strong>Output:</strong> Presenting results (monitor, printer, speakers)</li>
</ol>
<h5>Types of Computers</h5>
<table class="reading-table">
<tr><th>Type</th><th>Description</th><th>Examples</th></tr>
<tr><td>Supercomputers</td><td>Most powerful, used for complex simulations</td><td>Weather forecasting, nuclear research</td></tr>
<tr><td>Mainframes</td><td>Large-scale data processing</td><td>Banking systems, airline reservations</td></tr>
<tr><td>Personal Computers</td><td>General-purpose desktops and laptops</td><td>Windows PC, MacBook, Chromebook</td></tr>
<tr><td>Mobile Devices</td><td>Portable computing</td><td>Smartphones, tablets</td></tr>
<tr><td>Embedded Systems</td><td>Built into other devices</td><td>Smart TVs, car computers, IoT devices</td></tr>
</table>` },
    { heading: 'How Computers Think: Binary',
      content: `<p>Computers only understand two states: <strong>on</strong> (1) and <strong>off</strong> (0). This is the <strong>binary system</strong>. Every piece of data — text, images, videos, programs — is ultimately stored as sequences of 1s and 0s.</p>
<table class="reading-table">
<tr><th>Unit</th><th>Size</th><th>Example</th></tr>
<tr><td>Bit</td><td>Single 0 or 1</td><td>The smallest unit of data</td></tr>
<tr><td>Byte</td><td>8 bits</td><td>One character (letter 'A' = 01000001)</td></tr>
<tr><td>Kilobyte (KB)</td><td>1,024 bytes</td><td>A short text document</td></tr>
<tr><td>Megabyte (MB)</td><td>1,024 KB</td><td>A high-quality photo</td></tr>
<tr><td>Gigabyte (GB)</td><td>1,024 MB</td><td>A movie or large application</td></tr>
<tr><td>Terabyte (TB)</td><td>1,024 GB</td><td>A large hard drive</td></tr>
</table>
<div class="reading-callout"><h5>Why Binary?</h5><p>Electronic circuits have two states: voltage on or off. Binary is the most reliable way to represent data electronically because there are only two possible states to distinguish, minimizing errors.</p></div>` }
  ]
},
{
  module: 2, title: 'Hardware Components',
  sections: [
    { heading: 'The Central Processing Unit (CPU)',
      content: `<p>The <strong>CPU</strong> is the "brain" of the computer. It executes instructions from programs by performing arithmetic, logic, and control operations.</p>
<h5>Key CPU Concepts</h5>
<ul>
<li><strong>Clock Speed:</strong> Measured in GHz (billions of cycles per second). A 3.5 GHz CPU performs 3.5 billion cycles per second.</li>
<li><strong>Cores:</strong> Modern CPUs have multiple cores (dual-core, quad-core, octa-core), each capable of processing instructions independently.</li>
<li><strong>Threads:</strong> Virtual cores that allow a single physical core to handle multiple tasks simultaneously (hyper-threading).</li>
<li><strong>Cache:</strong> Ultra-fast memory built into the CPU (L1, L2, L3) for frequently accessed data.</li>
</ul>
<h5>CPU Manufacturers</h5>
<p><strong>Intel</strong> (Core i3/i5/i7/i9) and <strong>AMD</strong> (Ryzen 3/5/7/9) dominate the desktop/laptop market. <strong>Apple Silicon</strong> (M1/M2/M3) uses ARM architecture for exceptional power efficiency. <strong>ARM</strong> processors power most smartphones.</p>` },
    { heading: 'Memory and Storage',
      content: `<p>Computers use different types of memory for different purposes:</p>
<table class="reading-table">
<tr><th>Type</th><th>Speed</th><th>Persistence</th><th>Purpose</th></tr>
<tr><td><strong>RAM</strong></td><td>Very fast</td><td>Volatile (lost on power off)</td><td>Active programs and data</td></tr>
<tr><td><strong>SSD</strong></td><td>Fast</td><td>Non-volatile (permanent)</td><td>Long-term storage, OS, apps</td></tr>
<tr><td><strong>HDD</strong></td><td>Slower</td><td>Non-volatile</td><td>Bulk storage, backups</td></tr>
<tr><td><strong>Cache</strong></td><td>Fastest</td><td>Volatile</td><td>CPU-level temporary data</td></tr>
</table>
<p><strong>RAM (Random Access Memory)</strong> is your computer's short-term memory. When you open an application, it loads from storage into RAM for fast access. More RAM = more programs running smoothly simultaneously. Most modern computers have 8-32 GB of RAM.</p>
<div class="reading-callout"><h5>SSD vs HDD</h5><p><strong>SSDs</strong> (Solid State Drives) have no moving parts, are 5-10x faster than HDDs, and are more durable. <strong>HDDs</strong> (Hard Disk Drives) use spinning magnetic platters and are cheaper per GB. SSDs are now the standard for primary storage.</p></div>` }
  ]
},
{
  module: 3, title: 'Software & Operating Systems',
  sections: [
    { heading: 'Types of Software',
      content: `<p>Software is a set of instructions that tells hardware what to do. It falls into two main categories:</p>
<h5>System Software</h5>
<ul>
<li><strong>Operating Systems:</strong> Manage hardware resources and provide services for applications (Windows, macOS, Linux, Android, iOS)</li>
<li><strong>Device Drivers:</strong> Allow the OS to communicate with hardware devices (printer drivers, GPU drivers)</li>
<li><strong>Utilities:</strong> Maintenance tools (antivirus, disk cleanup, file compression)</li>
</ul>
<h5>Application Software</h5>
<ul>
<li><strong>Productivity:</strong> Word processors, spreadsheets, presentations (Microsoft Office, Google Docs)</li>
<li><strong>Communication:</strong> Email clients, messaging apps, video conferencing (Gmail, Slack, Zoom)</li>
<li><strong>Creative:</strong> Photo/video editing, music production (Photoshop, Premiere Pro)</li>
<li><strong>Development:</strong> Code editors, IDEs, databases (VS Code, PyCharm, MySQL)</li>
<li><strong>Web Browsers:</strong> Access the internet (Chrome, Firefox, Safari, Edge)</li>
</ul>` },
    { heading: 'Operating Systems Deep Dive',
      content: `<p>An <strong>Operating System (OS)</strong> is the most important software on a computer. It manages all hardware and software resources and provides common services.</p>
<h5>Key OS Functions</h5>
<ul>
<li><strong>Process Management:</strong> Running multiple programs simultaneously (multitasking)</li>
<li><strong>Memory Management:</strong> Allocating RAM to active programs, using virtual memory when RAM is full</li>
<li><strong>File System:</strong> Organizing files in directories/folders (NTFS for Windows, APFS for macOS, ext4 for Linux)</li>
<li><strong>User Interface:</strong> GUI (graphical) or CLI (command line) for user interaction</li>
<li><strong>Security:</strong> User accounts, permissions, encryption, firewalls</li>
</ul>
<table class="reading-table">
<tr><th>OS</th><th>Creator</th><th>Used For</th></tr>
<tr><td>Windows</td><td>Microsoft</td><td>Most PCs, gaming, business</td></tr>
<tr><td>macOS</td><td>Apple</td><td>Mac computers, creative work</td></tr>
<tr><td>Linux</td><td>Open source</td><td>Servers, development, embedded systems</td></tr>
<tr><td>Android</td><td>Google</td><td>Most smartphones and tablets</td></tr>
<tr><td>iOS</td><td>Apple</td><td>iPhones and iPads</td></tr>
</table>` }
  ]
},
{
  module: 4, title: 'Binary & Number Systems',
  sections: [
    { heading: 'Number Systems',
      content: `<p>Computers use different number systems to represent data:</p>
<table class="reading-table">
<tr><th>System</th><th>Base</th><th>Digits</th><th>Usage</th></tr>
<tr><td>Binary</td><td>2</td><td>0, 1</td><td>How computers store all data</td></tr>
<tr><td>Decimal</td><td>10</td><td>0-9</td><td>Human counting (everyday use)</td></tr>
<tr><td>Hexadecimal</td><td>16</td><td>0-9, A-F</td><td>Colors, memory addresses, compact binary</td></tr>
<tr><td>Octal</td><td>8</td><td>0-7</td><td>File permissions (Linux)</td></tr>
</table>
<h5>Binary to Decimal Conversion</h5>
<p>Each binary digit represents a power of 2, starting from the right:</p>
<pre><code>Binary: 1 0 1 1 0 1
Powers: 32 16 8 4 2 1

Calculation: 32 + 0 + 8 + 4 + 0 + 1 = 45

So binary 101101 = decimal 45</code></pre>
<h5>Hexadecimal</h5>
<p>Hex is a compact way to write binary. Each hex digit represents 4 binary digits:</p>
<pre><code>Hex:    #4285F4 (Google Blue)
Split:  42    85    F4
Binary: 01000010 10000101 11110100
Means:  Red=66  Green=133  Blue=244</code></pre>` }
  ]
},
{
  module: 5, title: 'Networks & the Internet',
  sections: [
    { heading: 'Computer Networks',
      content: `<p>A <strong>computer network</strong> connects two or more devices to share resources and communicate.</p>
<h5>Network Types</h5>
<ul>
<li><strong>LAN (Local Area Network):</strong> Connects devices in a small area like a home, office, or school. Fast speeds, privately owned.</li>
<li><strong>WAN (Wide Area Network):</strong> Connects devices across large geographic areas. The internet is the largest WAN.</li>
<li><strong>Wi-Fi:</strong> Wireless LAN using radio waves. Standards: Wi-Fi 5 (802.11ac), Wi-Fi 6 (802.11ax).</li>
</ul>
<h5>How the Internet Works</h5>
<ol>
<li>You type a URL (e.g., google.com) in your browser</li>
<li><strong>DNS</strong> (Domain Name System) translates the URL to an IP address (e.g., 142.250.80.46)</li>
<li>Your request travels through routers across the internet to reach the server</li>
<li>The server processes your request and sends back data (HTML, CSS, JS, images)</li>
<li>Your browser renders the received data into the web page you see</li>
</ol>
<h5>Key Protocols</h5>
<table class="reading-table">
<tr><th>Protocol</th><th>Purpose</th></tr>
<tr><td><strong>HTTP/HTTPS</strong></td><td>Web page transfer (HTTPS is encrypted/secure)</td></tr>
<tr><td><strong>TCP/IP</strong></td><td>Foundation of internet communication</td></tr>
<tr><td><strong>DNS</strong></td><td>Translates domain names to IP addresses</td></tr>
<tr><td><strong>FTP</strong></td><td>File transfer between computers</td></tr>
<tr><td><strong>SMTP/IMAP</strong></td><td>Sending and receiving email</td></tr>
</table>
<div class="reading-callout"><h5>IP Addresses</h5><p>Every device on the internet has a unique IP address. <strong>IPv4</strong> uses 4 numbers (192.168.1.1), while <strong>IPv6</strong> uses 8 groups of hex digits to support the growing number of connected devices (billions of IoT devices).</p></div>` }
  ]
}
];
