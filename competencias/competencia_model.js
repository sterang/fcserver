const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const competenciaSchema = new Schema({
    id_competencia:{
        type: Number,
        required: true,
        trim: true,
    },
    nombre_competencia:{
        type: String,
        required: true,
        trim: true,
    },
    id_areaMateria:{
        type: Number,
        required: true,
        trim: true,
    },
    gradoInicial:{
        type: Number,
        required: true,
        trim: true,
    },
    gradoFinal:{
        type: Number,
        required: true,
        trim: true,
    },
},{timestamps:true});

module.exports = competenciaSchema;
//module.exports = mongoose.model('contents', contentSchema);
//id_competencia id_materiaCompetencia gradoInicial gradoFinal	
//nombre_copetencia