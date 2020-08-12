/**
 * Server.js listens requests on port. It uses Node.js as runtime and Express.js for handling RESTfull requests.
 * Vocabulary shortcuts : Requests from port, aka calls ; request passed from a middleware to another, aka req.
 */

// __ __ Server Set up __ __

// __Environment configuration handling__
require('dotenv').config();
const home = process.env;
////const config = require("./config.js");
////const dataConfig = require("./config.json");

// __Create server with Express__
const express = require('express');
const server=express();
const homePort = home.SERVER_DEV_PORT; //global.gConfig.node_port;

// //const cors = require('cors'); // Pour bypasser les cross-origins securities // il faut npm i cors
// __Server wake up check !__
console.log('Hello world!');


// __ __ Router Set up __ __
const router = express.Router();

// __API routes get managed by Router__
server.use('/api/', router);

// __Body parsing enabled__
router.use(express.json())
router.use(express.urlencoded({extended:true}));

////const opCors = { methods: 'POST'};
////router.use(cors(opCors))

// __Calls permissions Set Up__
router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });


// __ __ Database Connection __ __
            // const mysql = require('mysql');
            // const baseName = 'someth'//global.gConfig.database;
            // //local mysql db connection
            // const sql = mysql.createConnection('TO SET');
            // sql.connect(function(err) {
            //     if (err) throw err;
            //         console.log(`Connected to database`);
            // });


// __ __ Reqs CRUD Managment __ __
//__POST
router.post('/frames', (req,res) => {
    const newmovie = req.body;
    console.log("+ Data received for Post on SERVEUR "+ homePort);
    console.log(newmovie);
    console.log('++ req : '+ newmovie + req.get("year")); // il faut que dans le formulaire (fornt-end), il y ai précisé le type de donnée envoyée (l'objet fetched)
    res.send('+++ Test working');
})

//__GET
router.get('/frames', (req, res)=> {
    console.log("+ Getting frame for Get server :");
    res.status(200).send("Get Call listened. Poked you back.")

    // sql.query('SELECT * FROM frames', (err, results)=> {
    //     if(err){
    //         console.log('++ Error to get frames datas');
    //         res.status(500).send('++ There is an error to retrieve datas'+err)
    //     }else{
    //         res.json(results);
    //         console.log("++ Data returned to GET req.")
    //     }
    // })
})

// __ __ Server On Run  __ __
server.listen(homePort, err => {
    console.log("+ Server is listening on port"+ homePort)
    if(err) {
        console.log("++ Something bad happened :"+ err)
    }else{
        console.log("++ Server wainting for work !");
    }
})