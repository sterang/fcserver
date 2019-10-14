const mongoose = require('mongoose');
const contentSchema = require('./content_model');

contentSchema.statics={
    create: function(data, cb){
        const content = new this(data);
        content.save(cb);
    },
    load: function(query,cb){
        this.find(query, cb);
    }
}

const contentModel = mongoose.model('Content',contentSchema);
module.exports = contentModel;