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
    data_start:{
        type: String,
        trim: true
    },
    hour_start:{
        type: String,
        trim: true
    },
    data_end:{
        type: String,
        trim: true
    },
    hour_end:{
        type: String,
        trim: true
    },
    id_actividad:{
        type:Number,
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
    },
    check_document:{
        type:Number,
        trim: true
    },
    check_a1:{
        type:Number,
        trim: true
    },
    check_a2:{
        type:Number,
        trim: true
    },
    check_a3:{
        type:Number,
        trim: true
    },
    check_profile:{
        type:Number,
        trim: true
    }

})


    //id_evento	data_start	hour_start	data_hours_end	hour_end
    //	id_actividad	id_estudiante	check_download	check_inicio	
    //check_fin	check_answer	count_video	check_video	check_document
    //	check_a1	check_a2	check_a3	check_profile
module.exports = eventoSchema;
