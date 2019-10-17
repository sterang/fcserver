const Eventos = require('./eventos_controller');
module.exports=(router)=> {
    router.post('/createEventos', Eventos.createEventos);
    router.post('/loadEvento', Eventos.loadEvento);
}