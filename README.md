# StoryBook Web Application

This web application allows users to login using their google account, to post, edit and delete stories, and to read and view the stories of other users. 


![alt tag](https://github.com/BreaBang/StoryApp/blob/main/StoryBooksGif.gif)

## How It's Made:
**Tech used:** HTML, CSS, JavaScript, Handlebars, Node.js, Express, MongoDB, Mongoose, Materialze
I coded along for this app with a tutorial by Brad Traversy. You can find his code <a href="https://github.com/bradtraversy/storybooks">here</a> a the video <a href="https://www.youtube.com/watch?v=SBvmnHTQIPY&t=535s">here</a>.
I went through this tutiorial with a Twitch streamer known as Mayanwolfe. You can find her tutorial <a href="https://www.youtube.com/watch?v=p6nwq0JTau4&t=1s"> here</a>.

### Required Dependencies
Install <a href="https://nodejs.org/en/">node.js</a>
npm init
npm i express mongoose connect-mongo express-session express-handlebars dotenv method-override moment morgan passport passport-google-oauth20
npm i -D nodemon cross-env

### Usage
<ul>
<li>Add your mongoDB URI and Google OAuth credentials to the config.env file.</li>
<li>Remember to add a .gitignore file and add your config.env and node_modules.</li>
<li>Run in development - enter "npm run dev" in the terminal command line.</li>
<li>Run in production - enter "npm start" in the terminal command line.</li>
</ul>

## What I Would Change If I Had More Time

There are a few issues that need to be resolved and a few features I would like to add:
<ul>
<li>Text wrapping for longer Google profile names.</li>
<li>Making sure the public stories box sizes stay the same size.</li>
<li>Additional login options besides google would be nice.</li>
<li>Image storage and the ability to add images.</li>
<li>The ability to update your profile with additional information and to change the profile photo.</li>
</ul>


## Lessons Learned:

While building this app I learned a lot about MVC architecture structure. This was also my first time using Handlebars and Materialze. I also learned about method-override in this tutorial and how to override forms to create PUT and DELETE requests. 


