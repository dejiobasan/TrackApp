//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const dotenv = require("dotenv");
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, onValue } = require("firebase/database");
const admin = require('firebase-admin');
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};

const serviceAccount = require('./creds.json');
const firebaseapp = initializeApp(firebaseConfig);
// const db = getDatabase(firebaseapp);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.databaseURL
});

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

admin.database().ref().once('value')
.then(snapshot => {
    const data = snapshot.val();
    console.log(data);
})

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/map", (req, res) => {
    res.render("map");
});

app.get("/data", async (req, res) => {    
   admin.database().ref().once('value')
   .then(snapshot => {
    const data = snapshot.val();
    res.json(data);
   })
   .catch(error => {
    console.error(error);
    res.status(500).send('Error retrieving data from database');
   });
});








app.listen(port, function () {
    console.log("server started at port 3000.");
});