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
    id_grado:{
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
    descripcion_actividad:{
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
    html:{
        type: Number,
        trim: true,
    },
    urlhtml:{
        type: String,
        trim: true,
    },
    descripcion_test:{
        type: String,
        trim: true,
    },
    Q1:{
        type: String,
        trim: true,
    },
    A11:{
        type: String,
        trim: true,
    },
    A12:{
        type: String,
        trim: true,
    },
    A13:{
        type: String,
        trim: true,
    },
    A14:{
        type: String,
        trim: true,
    },
    CA1:{
        type: Number,
        trim: true,
    },
    Q2:{
        type: String,
        trim: true,
    },
    A21:{
        type: String,
        trim: true,
    },
    A22:{
        type: String,
        trim: true,
    },
    A23:{
        type: String,
        trim: true,
    },
    A24:{
        type: String,
        trim: true,
    },
    CA2:{
        type: Number,
        trim: true,
    },
    Q3:{
        type: String,
        trim: true,
    },
    A31:{
        type: String,
        trim: true,
    },
    A32:{
        type: String,
        trim: true,
    },
    A33:{
        type: String,
        trim: true,
    },
    A34:{
        type: String,
        trim: true,
    },
    CA3:{
        type: Number,
        trim: true,
    },
}, {timestamps: true});

module.exports = activitySchema;


//id_actividad	id_colegio	id_docente	id_materia	id_competencia	titulo_actividad	
//descripcion_materia	video	urlvideo	lectura	urllectura	test	html	urlhtml	grado
