const ContentREA = require('./content_dao');

exports.createContentREA = async (req, res, next)=>{
    const newContentREA = {
        id_CREA: req.body.id_CREA,
        tipo_CREA: req.body.tipo_CREA,
        id_materia: req.body.id_materia,
        id_grado: req.body.id_grado,
        nombre_CREA: req.body.nombre_CREA,
        urlrepositorio: req.body.urlrepositorio,
        descripcion_CREA: req.body.descripcion_CREA
    }
    console.log(newContentREA);
    await ContentREA.create(newContentREA,(err,content)=>{
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

exports.allContent = (req,res,next)=>{
    ContentREA.find(function(err, contents){
        if(err) return res.status(500).send('Server Error');
        if(!contents){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(contents);
        }
    })
}

exports.newLoadContentREA = async (req, res) => {
    const contentsData = await ContentREA.find();
    res.json(contentsData);
}

exports.deleteContentREA = async (req, res) => {
    console.log(req.body)
    const contentData = {
        id_CREA: req.body.id_CREA
    }
    await ContentREA.deleteOne({id_CREA: contentData.id_CREA});
    res.json({Estado: 'Contenido Eliminado' })
}

//id_CREA	tipo_CREA	id_materia	grado10	
//grado11	
//nombre_CREA	urlrepositorio	descripcion_CREA
