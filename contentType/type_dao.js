const mongoose = require('mongoose');
const typeSchema = require('./type_model');

typeSchema.statics={
    create: function(data, cb){
        const type = new this(data);
        type.save(cb);
    },
    load: function(query,cb){
        this.find(query, cb);
    }
}

const typeModel = mongoose.model('Type',typeSchema);
module.exports = typeModel;