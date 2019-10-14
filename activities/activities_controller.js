const Activities = require('./activities_dao');

exports.createActivities = (req,res,next)=>{
    const newActivities = {
        id_actividad: req.body.id_actividad,
        id_colegio: req.body.id_colegio,
        id_docente: req.body.id_docente,
        id_materia: req.body.id_materia,
        id_competencia: req.body.id_competencia,
        titulo_actividad: req.body.titulo_actividad,
        descripcion_materia: req.body.descripcion_materia,
        video: req.body.video,
        urlvideo: req.body.urlvideo,
        lectura: req.body.lectura,
        urllectura: req.body.urllectura,
        test: req.body.test,
        html: req.body.html,
        urlhtml: req.body.urlhtml,
    }
    console.log(newActivities);
    Activities.create(newActivities,(err,activity)=>{
        if (err) return res.status(500).send('Server Error Create');
        res.send({activity});
    })
}

exports.loadActivities = (req, res, next)=>{
    const activityData={
        id_actividad: req.body.id_actividad,
    }
    console.log(activityData);
    Activities.findOne({id_actividad: activityData.id_actividad}, (err, activity)=>{
        if(err) return res.status(500).send('Server Error');
        if(!activity){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send({activity});
        }
    })
}
exports.allActivities = (req,res,next)=>{
    const activityData={
        id_materia: req.body.id_materia,
    }
    Activities.find(function(err, activities){
        if(err) return res.status(500).send('Server Error');
        if(!activities){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(activities);
        }
    })
}


//id_actividad	id_colegio	id_docente	id_materia	id_competencia	titulo_actividad	
//descripcion_materia	video	urlvideo	lectura	urllectura	test	html	urlhtml	grado
