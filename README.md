This app was created with guidance from Traversy Media

https://www.youtube.com/watch?v=w7ejDZ8SWv8


GETTING STARTED

npx create-react-app react-task-tracker

npm start

npm i react-icons // for access to font awesome


SERVING

npm run build // you deploy the build version. You don't need anything but the build folder.

npm i -g serve // used for serving the build version locally on your computer.

serve -s build -p 8000 // serve the build folder on port 8000


MOCK SERVER

npm i json-server // add "server": "json-server --watch db.json --port 5000" in package.json scripts

npm run server

can be reached with http://localhost:5000/tasks


ADDING ROUTING

npm i react-router-dom