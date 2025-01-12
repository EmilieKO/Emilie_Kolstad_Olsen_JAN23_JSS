# JavaScript Server - Course assessment 1

This app is designed to display information about memes and show each of the memes in a table. There is also a login functionality that allows you to see more details about the memes.

## Installation

To use this application, you have to install these dependencies using npm:

- axios: v1.2.2
- bootstrap: v5.2.3
- bootstrap-icons: v1.10.5
- cookie-parser: v1.4.4
- debug: v2.6.9
- ejs: v3.1.9
- express: v4.18.2
- express-session: v1.17.3
- express-session-json: v0.0.8
- http-errors: v1.6.3
- jquery: v3.7.0
- morgan: v1.9.1
- node-fetch: v3.3.1
- passport: v0.6.0
- passport-local: v1.0.0
- request: v2.88.2

## Code files

All the nodejs files are in the routes folder, where the get and post methods are located.
The DOM portion of the website is divided into views and partials, where the partials are sourced in the views files.
The custom js and css files are inclided in the public folder, and the api URL and users json are located in the data folder.

## Running the web app

1. Install npm via terminal
2. Install listed dependencies
3. Run the app by writing "npm start" in terminal
4. Open the server with the url "http://localhost:3000"

## Using the web app

The following functionality should now be available to you:

- A home page
- A navbar that navigates to /home, /memes and /login.
- Clicking memes will navigate to the meme table, where you can view the list of 100x memes.
- At the top of the table, you can search the table to see a specific meme
- Clicking search with an empty search term will show the original 100x memes
- Logging in will change the meme table to include a details button.
- Clicking the details button will send you to /memedetails where you can see additional information on the meme
- Afther you clicked one of the details buttons, the table row will change color so you can easily see which ones you clicked

## Additional information

- I found a few posts on stackoverflow that i took inspiration from:
  https://stackoverflow.com/questions/46224051/how-keep-same-table-cell-highlighted-after-page-refresh

  https://stackoverflow.com/questions/9127498/how-to-perform-a-real-time-search-and-filter-on-a-html-table

- And I got inspiration from this page for my API call:
  https://inspirnathan.com/posts/103-api-calls-in-nodejs/
- I got help from chatgpt with sourcing errors and inspiration for the post request and response
- I modified the login code from the previous project to use in this project
