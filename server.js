'use strict'
const express = require('express');
const cors = require('cors');
const activitiesRoutes = require('./activities/activities_routes');
const estudianteRoutes = require('./authE/authE_routes');
const docenteRoutes = require('./authD/authD_routes');
const contentRoutes = require('./contentREA/content_routes');
const eventosRoutes = require('./eventos/eventos_routes');
const subjectRoutes = require('./subject/subject_routes');
const gradeRoutes = require('./grade/grade_routes');
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
    uploadDir: './public/repositorio'
});

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncode = bodyParser.urlencoded({extended:true});

app.use(bodyParserJSON);
app.use(bodyParserURLEncode);

app.post('/subir', multipartMiddleware, (req, res) => {  
    console.log(req.files.uploads[0].path);
    const urls = req.files.uploads[0].path;
    const numero = urls.lastIndexOf("/");
    const lasturl = urls.substring(19);
    res.json({
        'url': `http://localhost:3000/public/repositorio/${lasturl}`
    });
});


app.use('/api', router);
activitiesRoutes(router);
//app.use('/api', router);
estudianteRoutes(router);
docenteRoutes(router);
contentRoutes(router);
eventosRoutes(router);
subjectRoutes(router);
gradeRoutes(router);

router.get('/',(req, res)=>{
    res.send('Hello From home');
});

app.use(router);
app.use(express.static('public'));
//Newww for Upload


app.listen(3000,()=> console.log(`Server running port 3000`));