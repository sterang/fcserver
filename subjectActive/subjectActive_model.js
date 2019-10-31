const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const subjectActiveSchema = new Schema({
    id_materiaActiva:{
        type: Number,
        required: true,
        trim: true,
    },
    nombre_materiaActiva:{
        type: String,
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
    id_docente:{
        type: Number,
        required: true,
        trim: true,
    },
    id_colegio:{
        type: Number,
        required: true,
        trim: true,
    },
},{timestamps:true});

module.exports = subjectActiveSchema;
//module.exports = mongoose.model('contents', contentSchema);
//id_materiaActiva  id_materia  id_docente  id_colegio
//nombre_materiaActiva