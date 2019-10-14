const Estudiante = require('./authE_dao');

exports.createEstudiante = (req, res, next)=>{
    const newEstudiante = {
        id_estudiante: req.body.id_estudiante,
        tipo_usuario: req.body.tipo_usuario,
        nombre_estudiante: req.body.nombre_estudiante,
        apellido_estudiante: req.body.apellido_estudiante,
        grado_estudiante: req.body.grado_estudiante,
        curso_estudiante: req.body.curso_estudiante,
        id_colegio: req.body.id_colegio,
        nombre_usuario: req.body.nombre_usuario,
        contrasena: req.body.contrasena,
        correo_electronico: req.body.correo_electronico
    }
    console.log(newEstudiante);
    Estudiante.create(newEstudiante,(err,student)=>{
        if (err) return res.status(500).send(`Server Error ${err}`);
        res.send({student})
    })
}

exports.loginEstudiante = (req, res, next)=>{
    console.log('Entra al Bucle');
    const estudianteData = {
        correo_electronico: req.body.correo_electronico,
        contrasena: req.body.contrasena
    }
    console.log(estudianteData);
    Estudiante.findOne({correo_electronico: estudianteData.correo_electronico}, (err, student)=>{
        if(err) return res.status(500).send(`Server Error`);
        if(!student){
            res.status(409).send({message:'Something Error'});
        }else{
            const resultContrasena= estudianteData.contrasena;
            if(resultContrasena==student.contrasena){
                res.send({student});
            }else{
                res.status(409).send({message: 'Something Wrong'});
            }
        }
    })
}

//id_estudiante	tipo_usuario	nombre_estudiante	
//apellido_estudiante	grado_estudiante	
//curso_estudiante	id_colegio	nombre_usuario	
//contraseña	correo_electronico
