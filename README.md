# problemSolving-OH

Hello!

This repo is set up as a full-stack, to-do application built using React, Axios, MySQL, and Express.

Your task is to, using the boilerplate provided, implement the functionality of the application on the front-end and in the server to pull items from the database to render them onto the page. In addition, your app should be able to send items from the input box of the frontend and save them in the database.

Goals:

[x] implement updateItem functionality to update state with the current contents of the <input> html element

[x] implement addItem to fire HTTP request to add item from groceryItem state property to the server

[x] Implement proper server route handling of HTTP request to add item to the database

[x] Once the request-response cycle has completed successfully, update gList array in App state.

[x] implement componentDidMount lifecyle method to pull in items from database each time the <App/> component mounts and render the items to the page

//things I had to do:

//Backend

//create a schema with SQL
//connect the schema to the DB using mysql -u root -p > schema.sql
//make sure the create connection was properly defined
// create queries based on what I needed from the DB
//export queries

//Express

//create routes that send status codes and req/res to the DB
//Err first call backs

//Front End

//create a function to perform a GET request
//create a function to make a POST request
//update state of whats being typed into the input bar
//pass props into other component
//add clickhandler function to submit button
//fix the component map

//additional: destructure props
