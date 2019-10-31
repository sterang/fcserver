const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex',true);
mongoose.set('useUnifiedTopology',true);
const docenteSchema = new Schema({
    id_docente:{
        type: Number,
        required: true,
        trim: true,
    },
    tipo_usuario:{
        type: Number,
        required: true,
        trim: true,
    },
    nombre_docente:{
        type: String,
        required: true,
        trim: true,
    },
    apellido_docente:{
        type: String,
        required: true,
        trim: true,
    },
    id_colegio:{
        type: Number,
        trim: true,
    },
    nombre_usuario:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    contrasena:{
        type: String,
        required: true,
        trim: true,
    },
    correo_electronico:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
  //id_docente	tipo_usuario	nombre_docente	apellido_docente	
//id_colegio	id_materia1	id_materia2	grado10_materia1	grado11_materia1
//	grado10_materia2	grado11_materia2	nombre_usuario	contraseña	correo_electronico

},{timestamps: true});

module.exports = docenteSchema;

