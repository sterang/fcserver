const AreaSubject = require('./areaSubject_controller');
module.exports=(router)=> {
    router.post('/createAreaSubject', AreaSubject.createAreaSubject);
    router.post('/loadAreaSubject', AreaSubject.loadAreaSubject);
    router.get('/loadAllAreaSubjects', AreaSubject.allAreaSubjects);
    router.get('/newLoadAreaSubjects', AreaSubject.newLoadAreaSubjects);
    //router.put('/modifyAreaSubject', AreaSubject.modifyAreaSubject);
    router.post('/deleteAreaSubject', AreaSubject.deleteAreaSubject);
}