const Activities = require('./activities_dao');

exports.createActivity = (req,res,next)=>{
    const newActivities = {
        id_actividad: req.body.id_actividad,
        id_colegio: req.body.id_colegio,
        id_docente: req.body.id_docente,
        id_materia: req.body.id_materia,
        id_grado: req.body.id_grado,
        id_competencia: req.body.id_competencia,
        titulo_actividad: req.body.titulo_actividad,
        descripcion_actividad: req.body.descripcion_actividad,
        video: req.body.video,
        urlvideo: req.body.urlvideo,
        lectura: req.body.lectura,
        urllectura: req.body.urllectura,
        html: req.body.html,
        urlhtml: req.body.urlhtml,
        descripcion_test: req.body.descripcion_test,
        Q1: req.body.Q1,
        A11: req.body.A11,
        A12: req.body.A12,
        A13: req.body.A13,
        A14: req.body.A14,
        CA1: req.body.CA1,
        Q2: req.body.Q2,
        A21: req.body.A21,
        A22: req.body.A22,
        A23: req.body.A23,
        A24: req.body.A24,
        CA2: req.body.CA2,
        Q3: req.body.Q3,
        A31: req.body.A31,
        A32: req.body.A32,
        A33: req.body.A33,
        A34: req.body.A34,
        CA3: req.body.CA3
    }
    console.log(newActivities);
    Activities.create(newActivities,(err,activity)=>{
        if (err) return res.status(500).send('Server Error Create');
        res.send({activity});
    })
}

exports.loadActivity = (req, res, next)=>{
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
    Activities.find(function(err, activities){
        if(err) return res.status(500).send('Server Error');
        if(!activities){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(activities);
        }
    })
}

exports.uploadActivity = async (req, res) => {
    const activityData={
        id_actividad: req.body.id_actividad,
    }
    const activityNewData = {
        id_colegio: req.body.id_colegio,
        id_docente: req.body.id_docente,
        id_materia: req.body.id_materia,
        id_competencia: req.body.id_competencia,
        titulo_actividad: req.body.titulo_actividad,
        descripcion_actividad: req.body.descripcion_actividad,
        video: req.body.video,
        urlvideo: req.body.urlvideo,
        lectura: req.body.lectura,
        urllectura: req.body.urllectura,
        html: req.body.html,
        urlhtml: req.body.urlhtml,
        test: req.body.test,
        Q1: req.body.Q1,
        A11: req.body.A11,
        A12: req.body.A12,
        A13: req.body.A13,
        A14: req.body.A14,
        CA1: req.body.CA1,
        Q2: req.body.Q2,
        A21: req.body.A21,
        A22: req.body.A22,
        A23: req.body.A23,
        A24: req.body.A24,
        CA2: req.body.CA2,
        Q3: req.body.Q3,
        A31: req.body.A31,
        A32: req.body.A32,
        A33: req.body.A33,
        A34: req.body.A34,
        CA3: req.body.CA3
    }
    await Activities.updateOne({id_actividad: activityData.id_actividad}, {$set: activityNewData}, {new: true});
    res.json({status: 'Actividad Actualizada'});
}


exports.deleteActivity = async (req, res) => {
    console.log(req.body)
    const activityData = {
        id_actividad: req.body.id_actividad
    }
    await Activities.deleteOne({id_actividad: activityData.id_actividad});
    res.json({Estado: 'Actividad Eliminada' })
}


//id_actividad	id_colegio	id_docente	id_materia	id_competencia	titulo_actividad	
//descripcion_materia	video	urlvideo	lectura	urllectura	test	html	urlhtml	grado
