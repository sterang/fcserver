'use strict'
const express = require('express');
const activitiesRoutes = require('./activities/activities_routes');
const estudianteRoutes = require('./authE/authE_routes');
const docenteRoutes = require('./authD/authD_routes');
const contentRoutes = require('./contentREA/content_routes');
//const properties = require('./config/properties');
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
//app.use('/api', router);
estudianteRoutes(router);

docenteRoutes(router);

contentRoutes(router);
router.get('/',(req, res)=>{
    res.send('Hello From home');
});

app.use(router);
app.use(express.static('public'));
app.listen(3000,()=> console.log(`Server running port 3000`));