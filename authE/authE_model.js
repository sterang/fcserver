const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex',true);
mongoose.set('useUnifiedTopology',true);
const estudianteSchema = new Schema({
    id_estudiante:{
        type: Number,
        required: true,
        trim: true,
    },
    tipo_usuario:{
        type: Number,
        required: true,
        trim: true,
    },
    nombre_estudiante:{
        type: String,
        required: true,
        trim: true,
    },
    apellido_estudiante:{
        type: String,
        required: true,
        trim: true,
    },
    grado_estudiante:{
        type: Number,
        required: true,
        trim: true,
    },
    curso_estudiante:{
        type: Number,
        required: true,
        trim: true,
    },
    id_colegio:{
        type: Number,
        required: true,
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
},{timestamps: true});

module.exports = estudianteSchema;

//id_estudiante	tipo_usuario	nombre_estudiante	
//apellido_estudiante	grado_estudiante	
//curso_estudiante	id_colegio	nombre_usuario	
//contraseña	correo_electronico
