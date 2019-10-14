const mongoose = require('mongoose');
const estudianteSchema = require('./authE_model');

estudianteSchema.statics={
    create: function(data, cb){
        const student = new this(data);
        student.save(cb);
    },
    login: function(query,cb){
        this.find(query,cb);
    }
}
const estudiantesModel = mongoose.model('Estudiantes',estudianteSchema);

module.exports = estudiantesModel;