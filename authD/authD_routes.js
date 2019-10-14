const Docente = require('./authD_controller');
module.exports=(router)=> {
    router.post('/createDocente', Docente.createDocente);
    router.post('/loginDocente', Docente.loginDocente);
}