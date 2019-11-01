const Subject = require('./subject_dao');

exports.createSubject = async (req, res, next)=>{
    const newSubject = {
        id_materia: req.body.id_materia,
        nombre_materia: req.body.nombre_materia,
        id_colegio: req.body.id_colegio,
        id_areaMateria: req.body.id_areaMateria,
        url_imagen: req.body.url_imagen
    }
    console.log(newSubject);
    await Subject.create(newSubject,(err,subject)=>{
        if(err) return res.status(500).send(`Server Error`);
        res.send({subject});
    })
}
exports.loadSubject = (req,res,next)=>{
    const subjectData = {
        id_materia: req.body.id_materia
    }
    Subject.findOne({id_materia: subjectData.id_materia},(err, subject)=>{
        if(err) return res.status(500).send('Server Error');
        if(!subject){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({subject});
        }
    })
}
exports.allSubjects = (req,res,next)=>{
    Subject.find(function(err, subjects){
        if(err) return res.status(500).send('Server Error');
        if(!subjects){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(subjects);
        }
    })
}

exports.newLoadSubjects = async (req, res) => {
    const subjectsData = await Subject.find();
    res.json(subjectsData);
}

exports.deleteSubject = async (req, res) => {
    console.log(req.body)
    const subjectData = {
        id_materia: req.body.id_materia
    }
    await Subject.deleteOne({id_materia: subjectData.id_materia});
    res.json({Estado: 'Materia Eliminada' })
}

//id_materia	id_colegio

//nombre_materia	url_imagen	
