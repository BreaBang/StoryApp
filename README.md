# StoryBook Web Application

This web application allows users to login using their google account, to post, edit and delete stories, and to read and view the stories of other users. 


![alt tag](https://github.com/BreaBang/StoryApp/blob/main/StoryBooksGif.gif)

## How It's Made:
**Tech used:** HTML, CSS, JavaScript, Handlebars, Node.js, Express, MongoDB, Mongoose, Materialze
I coded along for this app with a tutorial by Brad Traversy. You can find his code <a href="https://github.com/bradtraversy/storybooks">here</a> a the video <a href="https://www.youtube.com/watch?v=SBvmnHTQIPY&t=535s">here</a>.
I went through this tutiorial with a Twitch streamer known as Mayanwolfe. You can find her tutorial <a href="https://www.youtube.com/watch?v=p6nwq0JTau4&t=1s"> here</a>.

**Required Dependencies**
<ul>
<li>Install <a href="https://nodejs.org/en/">node.js</a></li>
<li>npm init</li>
<li>npm i express mongoose connect-mongo express-session express-handlebars dotenv method-override moment morgan passport passport-google-oauth20</li>
<li>npm i -D nodemon cross-env</li>
 </ul>

**Usage**
<ul>
<li>Add your mongoDB URI and Google OAuth credentials to the config.env file.</li>
<li>Remember to add a .gitignore file and add your config.env and node_modules.</li>
<li>Run in development - enter "npm run dev" in the terminal command line.</li>
<li>Run in production - enter "npm start" in the terminal command line.</li>
</ul>

## Lessons Learned:

**MVC:**
While building this app I learned a lot about MVC architecture structure and had the opportunity to see it in use first hand. We use Models, Views, Controlers and Routes to organize the code and keep things easy to understand and clean. I know in the future when I use this as a template to create something new, it will be easier to make changes without breaking everything. 

**Handlebars and Materialze:**
This was also my first time using Handlebars and Materialze. The Materialize framework was easy to work with and I am interest in seeing what else I can do with it. I've read Bootstrap has more users and is easier to troubleshoot because of that but have not had the opportunity to try it yet.

Compared to my limited experience with EJS, I think Handlebars is a little easier to understand and I plan to try using it again in the future. 

**Method-Override:**
In this tutorial I leanred how to override forms to create PUT and DELETE requests using method-override. This is a useful way to get more out of forms. 

## What I Would Change If I Had More Time

There are a few issues that need to be resolved and a few features I would like to add:
<ul>
<li>Text wrapping for longer Google profile names.</li>
<li>Making sure the public stories box sizes stay the same size.</li>
<li>Additional login options besides google would be nice.</li>
<li>Image storage and the ability to add images.</li>
<li>The ability to update your profile with additional information and to change the profile photo.</li>
</ul>


