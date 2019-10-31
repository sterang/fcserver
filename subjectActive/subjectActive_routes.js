const SubjectActive = require('./subjectActive_controller');
module.exports=(router)=> {
    router.post('/createSubjectActive', SubjectActive.createSubjectActive);
    router.post('/loadSubjectActive', SubjectActive.loadSubjectActive);
    router.get('/loadAllSubjectActives', SubjectActive.allSubjectActives);
    router.get('/newLoadSubjectActives', SubjectActive.newLoadSubjectActives);
    //router.put('/modifySubjectActive', SubjectActive.modifySubjectActive);
    router.post('/deleteSubjectActive', SubjectActive.deleteSubjectActive);
}