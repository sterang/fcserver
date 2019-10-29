const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const typeSchema = new Schema({
    id_tipoContenido:{
        type: Number,
        required: true,
        trim: true,
    },
    nombre_tipoContenido:{
        type: String,
        required: true,
        trim: true,
    },
},{timestamps:true});

module.exports = typeSchema;
//module.exports = mongoose.model('contents', contentSchema);
//id_tipoContenido	
//nombre_tipoContenido
