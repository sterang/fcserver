const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const contentSchema = new Schema({
    id_CREA:{
        type: Number,
        required: true,
        trim: true,
    },
    tipo_CREA:{
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
    nombre_CREA:{
        type: String,
        required: true,
        trim: true,
    },
    urlrepositorio:{
        type: String,
        required: true,
        trim: true,
    },
    descripcion_CREA:{
        type: String,
        trim: true,
    },
},{timestamps:true});

module.exports = contentSchema;
//module.exports = mongoose.model('contents', contentSchema);
//id_CREA	tipo_CREA	id_materia	grado10	
//grado11	
//nombre_CREA	urlrepositorio	descripcion_CREA