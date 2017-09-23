
# Readable React/Redux Client
## Installation
* Download the project from the github repo or use the git clone command via terminal
* Navigate into the ./client project folder that has the package.json file
* Run the command npm install and wait for all the packages to finish installing
* From this same root directory in terminal, run "npm start" to launch the app
* The browser should open a new tab to localhost:3000 where the app is running
* See the instrucitons below the next section for installing and launching the node server.

## SPECIAL NOTE
* There 2 different version of the specs for the project.
* PLEASE NOTE : the Project Overview and the Rubric DO NOT MATCH
* For this reason, I used the Porject Overview, which gave a detailed breakdown of what each view and piece of data should be.


# Readable API Server
## Installation

Install packages: `npm install`
Launch server: `node server`
Unless modified in `config.js` server will use port 3001


## API
Use an AuthorizationReactND header to work with your own data:

`fetch(url, { headers: { 'AuthorizationReactND': 'whatever-you-want' }})`

The following endpoints are available:  

`GET /categories`  
  **USAGE:**   
    Get all of the categories available for the app. List is found in categories.js.
    Feel free to extend this list as you desire.    

`GET /:category/posts`  
  **USAGE:**    
    Get all of the posts for a particular category   

`GET /posts`  
  **USAGE:**    
    Get all of the posts. Useful for the main page when no category is selected.  

`POST /posts`  
  **USAGE:**  
    Add a new post  
  
  **PARAMS:**   
    id - UUID should be fine, but any unique id will work  
    timestamp - timestamp in whatever format you like, you can use Date.now() if you like  
    title - String  
    body - String  
    owner - String  
    category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.  

`GET /posts/:id`  
  **USAGE:**  
    Get the details of a single post  

`POST /posts/:id`  
  **USAGE:**  
    Used for voting on a post  

  **PARAMS:**  
    option - String: Either "upVote" or "downVote"  
    
`PUT /posts/:id`  
  **USAGE:**  
    Edit the details of an existing post  

  **PARAMS:**  
    title - String  
    body - String  

`DELETE /posts/:id`  
  **USAGE:**  
    Sets the deleted flag for a post to 'true'.   
    Sets the parentDeleted flag for all child comments to 'true'.  
  
`GET /posts/:id/comments`  
  **USAGE:**  
    Get all the comments for a single post  

`POST /comments`  
  **USAGE:**  
    Add a comment to a post  

  **PARAMS:**  
    id: Any unique ID. As with posts, UUID is probably the best here.  
    timestamp: timestamp. Get this however you want.  
    body: String  
    owner: String  
    parentId: Should match a post id in the database.  

`GET /comments/:id`  
  **USAGE:**  
    Get the details for a single comment  

`POST /comments/:id`  
  **USAGE:**  
    Used for voting on a comment.  

`PUT /comments/:id`  
  **USAGE:**  
    Edit the details of an existing comment  
  
  **PARAMS:**  
    timestamp: timestamp. Get this however you want.  
    body: String  

`DELETE /comments/:id`  
  **USAGE:**  
    Sets a comment's deleted flag to 'true'  
