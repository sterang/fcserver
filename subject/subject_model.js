const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const subjectSchema = new Schema({
    id_materia:{
        type: Number,
        required: true,
        trim: true,
    },
    nombre_materia:{
        type: String,
        required: true,
        trim: true,
    },
    id_colegio:{
        type: Number,
        required: true,
        trim: true,
    },
    url_imagen:{
        type: String,
        required: true,
        trim: true,
    },
},{timestamps:true});

module.exports = subjectSchema;
//module.exports = mongoose.model('contents', contentSchema);
//id_Materia	
//nombre_Materia