# MERN with Firebase Auth Pracitce

## 1. Setting up the Firebase & mongoDB Atlas.

# client firebase config

<!--
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAidCYJoMIAlMzC9593NteXrpV9Cmz-DNE",
  authDomain: "mernwithfireauth.firebaseapp.com",
  projectId: "mernwithfireauth",
  storageBucket: "mernwithfireauth.appspot.com",
  messagingSenderId: "188317599810",
  appId: "1:188317599810:web:46e88a088a146cc80ac5db"
};

const app = initializeApp(firebaseConfig); -->

# server firebase admin config

firebase serviceAccount.json

<!-- var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
}); -->

# mongoDB url for connection

<!-- mongodb+srv://mosmo:<password>@cluster0.qgz0v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority -->

## 2. Backend Server Environment

npm init
npm install express nodemon cors dotenv concurrently mongoose firebase-admin

<!-- package.json -->

"scripts": {
"start": "node backend/server.mjs",
"server": "nodemon backend/server.mjs",
"client": "npm start --prefix frontend",
"dev": "concurrently \"npm run server\" \"npm run client\"",
"test": "echo \"Error: no test specified\" && exit 1"
}

<!--  -->

.env

<!-- PORT / MONGO_URI / FIREBASE API / etc -->

# connect mongoDB set firebase SDK

sever.js

/config
db.js
index.js
firebase.js

<!-- require('dotenv').config(); -->

# setting up Routes

/routes
rootRoutes.js

<!-- app.use('/api/', require('./routes/rootRoutes')); -->

## 3. Frontend Create-react-app

/frontend

<!-- package.json -->

    "proxy": "http://localhost:8000",

<!--  -->

<!-- backend package.json -->

"client": "npm start --prefix frontend",
"dev": "concurrently \"npm run server\" \"npm run client\""

<!--  -->

npm i axios firebase react-router-dom react-icons react-modal react-toastify framer-motion

<!-- issue -->

react v18 realsed..
npm i react-modal --legacy-peer-deps

<!--  -->
