//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const dotenv = require("dotenv");
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, onValue } = require("firebase/database");
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

const firebaseapp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseapp);

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/map", (req, res) => {
    res.render("map");
});

app.get("/location", (req, res) => {
    const locationRef = ref(db, "lat/" + latId + "lng/");
    onValue(locationRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        // res.json(data);
    });

});



app.listen(port, function () {
    console.log("server started at port 3000.");
});