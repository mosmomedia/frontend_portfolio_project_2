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

## 3. Frontend Create-react-app & Authentication

# initiate React app

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

# styling with tailwind

<!-- https://tailwindcss.com/docs/guides/create-react-app -->

# Frontend setting up Firebase

/src/config
firebase.js

# pages & components

/pages
/components

# FE&BE sign-up Page

setting up Auth pages

## 4. Frontend Context API : Auth

/contexts/auth
AuthContext.js
AuthReducer.js

- react-firebase-hooks dependency

 <!-- To keep the history clean, you should set replace prop. This will avoid extra redirects after the user click back. -->

    if (user) {
    	return <Navigate to="/" replace />;
    }

<!--  -->

## 5. Backend Feedback API

/routes
feedbackRoutes.js
/models
feedbackModel.js
/controllers
feedbackController.js

<!-- express-async-handler -->

<!-- get req.body -->

app.use(express.urlencoded({ extended: false }));

<!--  -->

# authMiddleware API

#

    getAllFeedback,
    createFeedback,
    updateFeedback,
    deleteFeedback,

## 6. Frontend Feedback Pages & components

# about page

# Feedback Context API

/contexts/feedback
feedbackContext.js
feedbackAction.js
feedbackReducer.js

<!-- server.js -->

app.use(cors());
