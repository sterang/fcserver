const AreaSubject = require('./areaSubject_dao');

exports.createAreaSubject = async (req, res, next)=>{
    const newAreaSubject = {
        id_areaMateria: req.body.id_areaMateria,
        nombre_areaMateria: req.body.nombre_areaMateria
    }
    console.log(newAreaSubject);
    await AreaSubject.create(newAreaSubject,(err,areaSubject)=>{
        if(err) return res.status(500).send(`Server Error`);
        res.send({areaSubject});
    })
}
exports.loadAreaSubject= (req,res,next)=>{
    const areaSubjectData={
        id_areaMateria: req.body.id_areaMateria
    }
    AreaSubject.findOne({id_areaMateria: areaSubjectData.id_areaMateria},(err, areaSubject)=>{
        if(err) return res.status(500).send('Server Error');
        if(!areaSubject){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({areaSubject});
        }
    })
}
exports.allAreaSubjects = (req,res,next)=>{
    AreaSubject.find(function(err, areaSubjects){
        if(err) return res.status(500).send('Server Error');
        if(!areaSubjects){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(areaSubjects);
        }
    })
}

exports.newLoadAreaSubjects = async (req, res) => {
    const areaSubjectsData = await AreaSubject.find();
    res.json(areaSubjectsData);
}

exports.deleteAreaSubject = async (req, res) => {
    console.log(req.body)
    const areaSubjectData = {
        id_areaMateria: req.body.id_areaMateria
    }
    await AreaSubject.deleteOne({id_areaMateria: areaSubjectData.id_areaMateria});
    res.json({Estado: 'Area de Materia Eliminada' })
}