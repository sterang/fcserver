const mongoose = require('mongoose');
const subjectActiveSchema = require('./subjectActive_model');

subjectActiveSchema.statics={
    create: function(data, cb){
        const subjectActive = new this(data);
        subjectActive.save(cb);
    },
    load: function(query,cb){
        this.find(query, cb);
    }
}

const subjectActiveModel = mongoose.model('SubjectActive',subjectActiveSchema);
module.exports = subjectActiveModel;