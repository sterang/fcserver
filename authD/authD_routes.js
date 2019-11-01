const Docente = require('./authD_controller');
module.exports=(router)=> {
    router.post('/createDocente', Docente.createDocente);
    router.post('/loginDocente', Docente.loginDocente);
    router.post('/loadDocente', Docente.loadDocente);
    router.get('/loadAllDocentes', Docente.allDocente);
    router.put('/uploadDocente', Docente.uploadDocente);
    router.post('/deleteDocente', Docente.deleteDocente);
}