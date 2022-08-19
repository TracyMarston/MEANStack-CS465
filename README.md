# cs465-fullstack
<h2>Architecture</h2>
<p><b>Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).</b><br></p>
<P>For the project we used two different types of front end development, the first was Express, HTML with javascript. While the setup did allow for an MVC framework it had alot of components to run one page. For content we integrated handlebars which added a templated layer reducing the amount of repeatative HTML code. Routing for each page required the use of separate files. The main HTML pages could be broken down into components or modules that could be reused throughout the website making it easier to update. </P>
<p>The Single Page Application (SPA) achieved the same benefits of the Express, HTML and Javascript. All Routes were contained within a single file making it easier to manage as the application grows. Components for the different layouts were separated and called upon to display on a single page. 
<p><b>Why did the backend use a NoSQL MongoDB database?</b><br></p>
<p>For our project we needed a flexible data storage that wasn't rigid and could store various types of data. 
<hr />
<h2>Functionality</h2>
<p><b>How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.</b><br></p>
<p>Javascript is the interactive pieces of a website with the ability to create functionality at page level. JSON or Javascript Object Notation provides a noSQL database storage method for various types of information. It also allows the developer to create the equvalent of object returns for javascript. Combing JSON and Javascript enables developers to achieve the same use of a backend language.</p>
<P> FOr this project we refactored the javascript with the SPA to create a CRUD module for both front and back end of the website.</p> 

  <hr/>
<h2>Testing</h2>
 
<p><b>Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.</b><br></p>
<p>We used an application called POSTMAN to test out the different requests and retrievals (GET, PUT, DELETE and POST). By doing this we could see if the functionality was sucessful or not. Adding in the security component we were able to test out registering users and used a token to test out other functionality on the SPA website. Once the token was installed within POSTMAN we could see information only displayed to a user that was logged in. This layer of security also prevented outside sources from logging in or creating a user.</p>
<hr />  
  <h2>Reflection</h2>
  
<p><b>How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?</b><br></p>
<p>This course has helped me understand how Full-stack development comes together. I learned how to install node.js, express, typescript, crpyto, mongoose and what uses they have for full stack. I increased my existing knowledge of HTML, Javascript, and MongoDB. Gained skills with how to use POSTMAN for server testing. Having these new skills under my belt will help push me forward in my career.
