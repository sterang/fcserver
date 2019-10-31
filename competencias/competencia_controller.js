const Competencia = require('./competencia_dao');

exports.createCompetencia = async (req, res, next)=>{
    const newCompetencia = {
        id_competencia: req.body.id_competencia,
        nombre_competencia: req.body.nombre_competencia,
        id_areaMateria: req.body.id_areaMateria,
        gradoInicial: req.body.gradoInicial,
        gradoFinal: req.body.gradoFinal		
    }
    console.log(newCompetencia);
    await Competencia.create(newCompetencia,(err,competencia)=>{
        if(err) return res.status(500).send(`Server Error`);
        res.send({competencia});
    })
}
exports.loadCompetencia = (req,res,next)=>{
    const competenciaData={
        id_competencia: req.body.id_competencia
    }
    Competencia.findOne({id_competencia: competenciaData.id_competencia},(err, competencia)=>{
        if(err) return res.status(500).send('Server Error');
        if(!competencia){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({competencia});
        }
    })
}
exports.allCompetencias = (req,res,next)=>{
    Competencia.find(function(err, competencia){
        if(err) return res.status(500).send('Server Error');
        if(!competencia){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(competencia);
        }
    })
}

exports.newLoadCompetencias = async (req, res) => {
    const competenciaData = await Competencia.find();
    res.json(competenciaData);
}

exports.deleteCompetencia = async (req, res) => {
    console.log(req.body)
    const competenciaData = {
        id_competencia: req.body.id_competencia
    }
    await Competencia.deleteOne({id_competencia: competenciaData.id_competencia});
    res.json({Estado: 'Competencia Eliminada' })
}

//id_competencia id_materiaCompetencia gradoInicial gradoFinal	
//nombre_copetencia
