# Pesto Assignments

Week 1 assignment.

# Exercise 1.1:

<!-- The below syntax contains ![]() with alt text wrapped in square brackets[] and url and title is inside brackets().
![Alt text](url "Title")
if your image is in your repository, you can give url relative to your repository. If the image is located in repository->assets->employee.png url, Then the url is included as seen below

![Employee data](/repository/assets/employee.png?raw=true "Employee Data title") -->

- How a browser works?
  As soon you enter a URL in your browser and you hit ENTER, following major things happen:

1. The URL gets resolved
2. A Request is sent to the server of the website
3. The response of the server is parsed
4. The page is rendered and displayed
   ![Browser BTS](./Browser_BTS.PNG "Browser BTS")

- What are the high level components of a browser?
  The browser's main components are:

1. The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
2. The browser engine: marshals actions between the UI and the rendering engine.
3. The rendering engine : responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
4. Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
5. UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
6. JavaScript interpreter. Used to parse and execute JavaScript code.
7. Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
   https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/layers.png

- How each component works with each other. (For example: Networking component isthe one which makes HTTP calls, Data storage component is a browser’s persistencelayer which saves data locally such as Cookies and Local Storage.
  https://i.imgur.com/VcpjfPL.png
  https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#1_1

- How Parsing works and its importance?
  The browser receives the response sent by the server. This alone, doesn't display anything on the screen though.
  Instead, the next step is that the browser parses the response. Just as the server did it with the request. Again, the standardization enforced by HTTP helps of course.
  The browser checks the data and metadata that's enclosed in the response. And based on that, it decides what to do.
  You might've had cases where a PDF opened in your browser. That happened because the response informed the browser that the data is not a website but a PDF document instead. And the browser tries to pick the best handling mechanism for any data type it detects.

Every HTML tag has some semantic meaning which the browser understands, because HTML is also standardized. Hence there is no guessing about what a <h1> tag means.
The browser knows how to parse HTML and now simply goes through the entire response data (also called "the response body") to render the website.

- The order of execution of scripts?
  When browsers send requests to servers for HTML files, those HTML files often contain <link> elements referencing external CSS stylesheets and <script> elements referencing external JavaScript scripts. It's important to know the order in which those files are parsed by the browser as the browser loads the page:

The browser parses the HTML file first, and that leads to the browser recognizing any <link>-element references to external CSS stylesheets and any <script>-element references to scripts.
As the browser parses the HTML, it sends requests back to the server for any CSS files it has found from <link> elements, and any JavaScript files it has found from <script> elements, and from those, then parses the CSS and JavaScript.
The browser generates an in-memory DOM tree from the parsed HTML, generates an in-memory CSSOM structure from the parsed CSS, and compiles and executes the parsed JavaScript.
As the browser builds the DOM tree and applies the styles from the CSSOM tree and executes the JavaScript, a visual representation of the page is painted to the screen, and the user sees the page content and can begin to interact with it.

# Exercise 1.2:
