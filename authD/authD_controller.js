const Docente = require('./authD_dao');

exports.createDocente = (req, res, next)=>{
    const newDocente = {
        id_docente: req.body.id_docente,
        tipo_usuario: req.body.tipo_usuario,
        nombre_docente: req.body.nombre_docente,
        apellido_docente: req.body.apellido_docente,
        id_colegio: req.body.id_colegio,
        nombre_usuario: req.body.nombre_usuario,
        contrasena: req.body.contrasena,
        correo_electronico: req.body.correo_electronico
    }
    //id_docente	tipo_usuario	nombre_docente	apellido_docente	
//id_colegio	id_materia1	id_materia2	grado10_materia1	grado11_materia1
//	grado10_materia2	grado11_materia2	nombre_usuario	contraseña	correo_electronico

    console.log(newDocente);
    Docente.create(newDocente,(err,teacher)=>{
        if (err) return res.status(500).send(`Server Error ${err}`);
        res.send({teacher})
    })
}

exports.loginDocente = (req, res, next)=>{
    console.log('Entra al Bucle');
    const docenteData = {
        correo_electronico: req.body.correo_electronico,
        contrasena: req.body.contrasena
    }
    console.log(docenteData);
    Docente.findOne({correo_electronico: docenteData.correo_electronico}, (err, teacher)=>{
        if(err) return res.status(500).send(`Server Error`);
        if(!teacher){
            res.status(409).send({message:'Something Error'});
        }else{
            const resultContrasena= docenteData.contrasena;
            if(resultContrasena==teacher.contrasena){
                res.send({teacher});
            }else{
                res.status(409).send({message: 'Something Wrong'});
            }
        }
    })
}

