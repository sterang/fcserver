const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const eventoSchema = new Schema({
    id_evento:{
        type: Number,
        required: true,
        trim: true
    },
    fecha: {
        type: String,
        required:true,
        trim: true
    },
    id_actividad:{
        type:Number,
        required:true,
        trim: true
    },
    id_estudiante:{
        type:Number,
        required: true,
        trim: true
    },
    check_download:{
        type:Number,
        trim: true
    },
    check_inicio:{
        type:Number,
        trim: true
    },
    check_fin:{
        type:Number,
        trim: true
    },
    check_answer:{
        type:Number,
        trim: true
    },
    count_video:{
        type:Number,
        trim: true
    },
    check_video:{
        type:Number,
        trim: true
    }
})

module.exports = eventoSchema;
//id_evento	fecha	id_actividad	id_estudiante	
//check_download	check_inicio	check_fin	
//check_answer	count_video	check_video
