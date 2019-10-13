'use strict'
const express = require('express');
const activitiesRoutes = require('./activities/activities_routes');
const properties = require('./config/properties');
const DB = require('./config/db');
//init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncode = bodyParser.urlencoded({extended:true});

app.use(bodyParserJSON);
app.use(bodyParserURLEncode);

app.use('/api', router);

activitiesRoutes(router);
router.get('/',(req, res)=>{
    res.send('Hello From home');
});

app.use(router);

app.listen(3000,()=> console.log(`Server running port 3000`));