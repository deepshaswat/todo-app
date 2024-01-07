## Todo App

This project contains a simple TODO application
It has the following features -

- Anyone can create a todo
- Anyone can see their existing todos
- Anyone can mark a todo as done

Step-by-Step Development -

- initialise a node project
- put a package.json
- Add `index.js` for the backend routes
- Add `types.js` for the zod verification
- Add `db.js` for the database schemas
- Update the routes with all the verifications and database entries
- Initialise a React project using` vite`: name as frontend, react, javascript
- Add a component folder inside src
- Add two components and render in the `App.jsx` file
- Install cors and use cors

Commands for Backend initialisation

    #initialise node.js project
    npm init
    npm install express
    npm install jsonwebtoken
    npm install #used to install the dependencies
    npm install mongoose

    #to start the node server:
    node backend/index.js

    #to initialise react Project
    npm create vite@latest
    cd frontend
    npm install

    #to start the server:
    npm run dev
