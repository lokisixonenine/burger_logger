# EAT-DA-BURGER Burger Logger
This is a burger logger app using MySQl, Node, Express, Handlebars, and ORM following the MVC design patter

## Scope
* This is a restaurant app that lets users input the names of the burgers that they would like to eat.  
* When a user submits a burger's name, the app will display the burger on the left side of the page, waiting to be eaten.
* Each burger in the waiting area will have a 'DEVOUR IT' button that when clicked, will move the burger to the right side of the page.
* The app will store every burger in a database, whether eaten or not. 

## Requirements
* This app must have a README.md file (If you are reading this, you are reading the first requirement for this app. Welcome!).
* If parts of this app cannot be completed, these parts must be pseudocoded to describe what remains to be comlpeted.
* App must be hosted on Heroku and there must be a README.md file on Heroku as well.
* App must be linked to porfolio. 

## File Structure
All the recommended files and directories from the steps above should look like the following structure:

├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
