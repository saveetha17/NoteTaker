const app = require("express").Router()
const fs = require('fs');
let db = require("../db/db.json");

// /CRUD - READ - Get, CREATE - post, UPDATEE - put, DELETE - delete

app.get("/api/notes",(req,res) => {
    console.log("req")
  //  db = JSON.parse(fs.readFileSync("./db/db.json")) 
    console.log("GET",db)
    res.json(db)
})

app.post("/api/notes",(req,res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random() * 999 ) // uuid
    }
    db.push(newNote)

    fs.writeFileSync("./db/db.json",JSON.stringify(db),function(err){
        if(err) throw err;
    })
    console.log("POST",db)
    res.json(db)
})


module.exports = app;

