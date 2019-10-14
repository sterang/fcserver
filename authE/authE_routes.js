const Estudiante = require('./authE_controller');
module.exports=(router)=> {
    router.post('/createEstudiante', Estudiante.createEstudiante);
    router.post('/loginEstudiante', Estudiante.loginEstudiante);
}