const mongoose = require('mongoose');
const dbUrl = require('./properties').DB;

module.exports=()=>{
    mongoose.connect(dbUrl, {useNewUrlParser:true})
        .then(()=>console.log(`Mongo connected on ${dbUrl}`))
        .catch(err => console.log(`Connection Error`))

        process.on('SIGINT',()=>{
            mongoose.connection.close(()=>{
                console.log(`Mongo disconneted`);
                process.exit(0);
            });
        });
}