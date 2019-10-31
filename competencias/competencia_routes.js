const Competencia = require('./competencia_controller');
module.exports=(router)=> {
    router.post('/createCompetencia', Competencia.createCompetencia);
    router.post('/loadCompetencia', Competencia.loadCompetencia);
    router.get('/loadAllCompetencias', Competencia.allCompetencias);
    router.get('/newLoadCompetencias', Competencia.newLoadCompetencias);
    //router.put('/modifyCompetencia', Competencia.modifyCompetencia);
    router.post('/deleteCompetencia', Competencia.deleteCompetencia);
}