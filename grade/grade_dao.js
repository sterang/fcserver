const mongoose = require('mongoose');
const gradeSchema = require('./grade_model');

gradeSchema.statics={
    create: function(data, cb){
        const grade = new this(data);
        grade.save(cb);
    },
    load: function(query,cb){
        this.find(query, cb);
    }
}

const gradeModel = mongoose.model('Grade',gradeSchema);
module.exports = gradeModel;