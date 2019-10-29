const Type = require('./type_dao');

exports.createType = async (req, res, next)=>{
    const newType = {
        id_tipoContenido: req.body.id_tipoContenido,
        nombre_tipoContenido: req.body.nombre_tipoContenido
    }
    console.log(newType);
    await Type.create(newType,(err,type)=>{
        if(err) return res.status(500).send(`Server Error`);
        res.send({type});
    })
}
exports.loadType = (req,res,next)=>{
    const typeData={
        id_tipoContenido: req.body.id_tipoContenido
    }
    Type.findOne({id_tipoContenido: gradeData.id_tipoContenido},(err, type)=>{
        if(err) return res.status(500).send('Server Error');
        if(!type){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({type});
        }
    })
}
exports.allTypes = (req,res,next)=>{
    Type.find(function(err, type){
        if(err) return res.status(500).send('Server Error');
        if(!type){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(type);
        }
    })
}

exports.newLoadTypes = async (req, res) => {
    const typesData = await Type.find();
    res.json(typesData);
}

exports.deleteType = async (req, res) => {
    console.log(req.body)
    const typeData = {
        id_tipoContenido: req.body.id_tipoContenido
    }
    await Type.deleteOne({id_tipoContenido: typeData.id_tipoContenido});
    res.json({Estado: 'Grado Eliminada' })
}

//id_tipoContenido	
//nombre_tipoContenidos	
