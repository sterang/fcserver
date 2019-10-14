const ContentREA = require('./content_dao');

exports.createContentREA=(req, res, next)=>{
    const newContentREA = {
        id_CREA: req.body.id_CREA,
        tipo_CREA: req.body.tipo_CREA,
        id_materia: req.body.id_materia,
        grado10: req.body.grado10,
        grado11: req.body.grado11,
        nombre_CREA: req.body.nombre_CREA,
        urlrepositorio: req.body.urlrepositorio,
        descripcion_CREA: req.body.descripcion_CREA
    }
    console.log(newContentREA);
    ContentREA.create(newContentREA,(err,content)=>{
        if(err) return res.status(500).send(`Server Error`);
        res.send({content});
    })
}
exports.loadContentREA= (req,res,next)=>{
    const contentData={
        id_CREA: req.body.id_CREA
    }
    ContentREA.findOne({id_CREA: contentData.id_CREA},(err, content)=>{
        if(err) return res.status(500).send('Server Error');
        if(!content){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({content});
        }
    })
}


//id_CREA	tipo_CREA	id_materia	grado10	
//grado11	
//nombre_CREA	urlrepositorio	descripcion_CREA
