/*
//      Habituellement, je travail en MVC sur des projets de groupe / plus conséquent,
//      Je n'ai pas jugé cet architecture nécéssaire pour ce mini-projet ce pourquoi j'ai tout fait ici,
//      Mais je tenais donc à le souligner.
*/

const express = require("express");
const cors = require("cors");

require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'users'
let db

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) return console.log(err)

  db = client.db(dbName)
  console.log(`Connected MongoDB: ${url}`)
  console.log(`Database: ${dbName}`)
})

app.post("/login", function(req, res, next) {
    db.collection("users").find({email : req.body.email, password : req.body.password}, function(err, docs) {
        if (err)
            return next(err);
        docs.each(function(err, doc){
            if (doc)
                res.send(true)
            else
                res.end()
        });
    });
});

app.listen(port, () => {
    console.log("Serveur ecoute sur le port " + port);
})