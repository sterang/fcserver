const SubjectActive = require('./subjectActive_dao');

exports.createSubjectActive = async (req, res, next)=>{
    const newSubjectActive = {
        id_materiaActiva: req.body.id_materiaActiva,
        nombre_materiaActiva: req.body.nombre_materiaActiva,
        id_materia: req.body.id_materia,
        id_grado: req.body.id_grado,
        id_docente: req.body.id_docente,
        id_colegio: req.body.id_colegio,
        url_imagen: req.body.url_imagen
    }
    console.log(newSubjectActive);
    await SubjectActive.create(newSubjectActive,(err,subjectActive)=>{
        if(err) return res.status(500).send(`Server Error`);
        res.send({subjectActive});
    })
}
exports.loadSubjectActive= (req,res,next)=>{
    const subjectActiveData={
        id_materiaActiva: req.body.id_materiaActiva
    }
    SubjectActive.findOne({id_materiaActiva: subjectActiveData.id_materiaActiva},(err, subjectActive)=>{
        if(err) return res.status(500).send('Server Error');
        if(!subjectActive){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({subjectActive});
        }
    })
}
exports.allSubjectActives = (req,res,next)=>{
    SubjectActive.find(function(err, subjectActives){
        if(err) return res.status(500).send('Server Error');
        if(!subjectActives){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(subjectActives);
        }
    })
}

exports.newLoadSubjectActives = async (req, res) => {
    const subjectActivesData = await SubjectActive.find();
    res.json(subjectActivesData);
}

exports.deleteSubjectActive = async (req, res) => {
    console.log(req.body)
    const subjectActiveData = {
        id_materiaActiva: req.body.id_materiaActiva
    }
    await SubjectActive.deleteOne({id_materiaActiva: subjectActiveData.id_materiaActiva});
    res.json({Estado: 'Materia Activa Eliminada' })
}