const mongoose = require('mongoose');
const eventosSchema = require('./eventos_model');

eventosSchema.statics={
    create: function(data, cb){
        const evento = new this(data);
        evento.save(cb);
    },
    load: function(query,cb){
        this.find(query, cb);
    }
}

const eventosModel = mongoose.model('Eventos',eventosSchema);

module.exports = eventosModel;