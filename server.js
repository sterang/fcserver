'use strict'
const express = require('express');
const cors = require('cors');
const activitiesRoutes = require('./activities/activities_routes');
const estudianteRoutes = require('./authE/authE_routes');
const docenteRoutes = require('./authD/authD_routes');
const contentRoutes = require('./contentREA/content_routes');
//const properties = require('./config/properties');
const DB = require('./config/db');
//init DB
DB();

const app = express();
app.use(cors());
const router = express.Router();

const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');  

const multipartMiddleware = multipart({  
    uploadDir: './public/images'
});

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncode = bodyParser.urlencoded({extended:true});

app.use(bodyParserJSON);
app.use(bodyParserURLEncode);

app.post('/subir', multipartMiddleware, (req, res, next) => {  
    console.log(req.files);
    res.json({
        'message': `File uploaded succesfully. Nombre: ${req.query}`
    });
});


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
//Newww for Upload


app.listen(3000,()=> console.log(`Server running port 3000`));