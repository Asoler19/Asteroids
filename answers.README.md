1. What are three things you can do in order to speed up a website's load time?  (20pts)

    - combine multiple style pages into one.
    - asynchronous javascript
    - reduce scripts and load them after html and css
    - minify your files (Css, javscript)
    -  put css on the top (head) / javascript on bottom  before closing body 
    - organize your code
    - cache
    - optimize/resize your images.

2. Go to the Google PageSpeed insights page and analyze ncl.com Choose three of the shortcomings this website
    has and explain the specific tools and workflows we discussed in class which could help this website
    address these shortcomings. (20pts)
    This page has low performance so do the following :
      - Eliminate render-blocking JavaScript and CSS in above-the-fold (what shows up when the page first loads) content
      - avoid webpage redirects when possible
      -  You should also Set an expiry date or a maximum age in the HTTP headers for static resources to instruct the browser to load
      - you can also optimize your image files. make them smaller
          previously downloaded resources from local disk rather than over the network.

3. What is the render tree?(20pts)

      - the render tree is a culmination of the DOM and CSSOM trees and is what visibly shows up on your page. This is then used to compute the layout of the visible elements/ paint render the page.

4. Explain the process of a how a website loads in terms of the internal data structures built and used by
    the browser (DOM, CSSOM, etc).(20pts)

    -The rendering engine will start getting the contents of the requested document from the networking layer.
    The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.

After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting–the render tree will be traversed and each node will be painted using the UI backend layer.



5. Clone the repository named "Asteroids" from www.github.com/fvitech. Once you do this, complete the following steps:

  i. Fork the github repo so you have your own fork (5pts) [done]
  ii. Clone your fork of the Asteroids repository (5pts) [done]
  iii. Re-organize the files so image files are inside an img folder and js files are inside a js folder. (5pt) [done]
  iv. Initialize your local version of the project as a node project (5pts) [done]
  v. Install browserify, watchify, and all the required transforms so that you can have a single code bundle [done]
      output to a file named prod.js (ES6 to ES5 conversion not required) (10pts)
  vi. The code is a bit messy, with many things in the same file. Modularize it by doing the following:
    a. Start by copying the contents of the codingIsFun.js file to a new file called main.js [done]
    b. Create a watchify npm script to bundle your js code and create prod.js.(10pts) [done]
    c. The Asteroids initialization code (which is marked by the comment which says GENERATE ASTEROIDS IN HTML [done]
        DOCUMENT) should be in a separate file named createAsteroids.js. You will need to wrap this code in a
        function, export the function, then import this function and call it from main.js (10pts)
    d. The auxiliary functions keyDown and keyUp should be moved to a separate file named controls.js. [done]
    e. The binding of the keyDown and keyUp events is currently being done in an attribute to the body tag. [done]
        Change this by using JavaScript's document.addEventListener function.
    f. Your controls.js file should export a single function that configures the controls when called. Import
        and call this function from your main.js file. (10pts)
    g. No more than one script link is allowed in the main index.html. The only script that should be linked [done]
        from index.html is prod.js
    h. Use uglifyjs to minify the code (20 point bonus)
vii. Upload your code to fvi-grad.com under your username (10pts)

6. In the end, all your JavaScript code should be inside a file named prod.js, which was created by using browserify.
    Nothing else should be linked to your html.

7. Notice that whenever there is a collision, the audio is being loaded and played. This slows down performance.
    Modify the code so that it loads the audio only once, stores it as a global variable, and whenever there is a
    collision, you use this global variable to reset the audio's currentTime to zero and then play it. (20pts)