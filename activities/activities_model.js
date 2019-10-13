const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const activitySchema = new Schema({
    id_actividad:{
        type: Number,
        required: true,
        trim: true,
    },
    id_colegio:{
        type: Number,
        required: true,
        trim: true,
    },
    id_docente:{
        type: Number,
        required: true,
        trim: true,
    },
    id_materia:{
        type: Number,
        required: true,
        trim: true,
    },
    id_competencia:{
        type: Number,
        required: true,
        trim: true,
    },
    titulo_actividad:{
        type: String,
        required: true,
        trim: true,
    },
    descripcion_materia:{
        type: String,
        trim: true,
    },
    video:{
        type: Number,
        trim: true,
    },
    urlvideo:{
        type: String,
        trim: true,
    },
    lectura:{
        type: Number,
        trim: true,
    },
    urllectura:{
        type: String,
        trim: true,
    },
    test:{
        type: String,
        trim: true,
    },
    html:{
        type: Number,
        trim: true,
    },
    urlhtml:{
        type: String,
        trim: true,
    },
}, {timestamps: true});

module.exports = activitySchema;


//id_actividad	id_colegio	id_docente	id_materia	id_competencia	titulo_actividad	
//descripcion_materia	video	urlvideo	lectura	urllectura	test	html	urlhtml	grado
