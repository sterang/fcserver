const Grade = require('./grade_dao');

exports.createGrade = async (req, res, next)=>{
    const newGrade = {
        id_grado: req.body.id_grado,
        nombre_grado: req.body.nombre_grado
    }
    console.log(newGrade);
    await Grade.create(newGrade,(err,grade)=>{
        if(err) return res.status(500).send(`Server Error`);
        res.send({grade});
    })
}
exports.loadGrade= (req,res,next)=>{
    const gradeData={
        id_grado: req.body.id_grado
    }
    Grade.findOne({id_grado: gradeData.id_grado},(err, grade)=>{
        if(err) return res.status(500).send('Server Error');
        if(!grade){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({grade});
        }
    })
}
exports.allGrades = (req,res,next)=>{
    Grade.find(function(err, grades){
        if(err) return res.status(500).send('Server Error');
        if(!grades){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(grades);
        }
    })
}

exports.newLoadGrades = async (req, res) => {
    const gradesData = await Grade.find();
    res.json(gradesData);
}

exports.deleteGrade = async (req, res) => {
    console.log(req.body)
    const gradeData = {
        id_grado: req.body.id_grado
    }
    await Grade.deleteOne({id_grado: gradeData.id_grado});
    res.json({Estado: 'Grado Eliminada' })
}

//id_grado	

//nombre_grado		
