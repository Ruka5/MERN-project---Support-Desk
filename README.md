# MERN-project---Support-Desk

Check out
How does the MERN stack work?
MERN Stack Development
MongoDB Atlas - The multi-coud application data platform
Redux - A Predictiable State Container for JS Apps
in chrome web store instal Redux DevTools
Postman which is http client
USE CONSOLE Git Bash


Now, set-up MongoDB Cloud platform -> mongodb.com -> Products -> Tools -> Compass -> Compass -> Download and install this
create mongo cloud db 

create SUPPORT-DESK name of project
as folder backend -> server.js and inside for now
// Entry point to our back-end
console.log('Server...');

the in the main root, call npm init
in package.json change this
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
with
  "scripts": {
    "start": "node backend/server.js"
  },

now thest with npm start which I should see Server...

now to conzole git init

create .gitignore in the root with this
node_modules
.env

npm i express dotenv mongoose colors bcryptjs

npm i -D nodemon
we also create script for it in package.json
 "scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js"
  },

npm run server

making commits:
git add .
git commit -m 'Initial commit'

now connect to the cloud.mongodb.com -> Connect -> Connect your application -> coppy string
put it to the .env file and dont forget change <password>
MONGO_URI = 'mongodb+srv://ruka5:<password>@lukascluster.9s0av.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

in Network Access, just make sure you have correct address

npm i jsonwebtoken


GET: 	http://localhost:5000/api/users/me
POST: 	http://localhost:5000/api/users
POST: 	http://localhost:5000/api/users/login?email=brad@gmail.com&password=123456









