const Grade = require('./grade_controller');
module.exports=(router)=> {
    router.post('/createGrade', Grade.createGrade);
    router.post('/loadGrade', Grade.loadGrade);
    router.get('/loadAllGrades', Grade.allGrades);
    router.get('/newLoadGrades', Grade.newLoadGrades);
    //router.put('/modifyGrade', Grade.modifyGrade);
    router.post('/deleteGrade', Grade.deleteGrade);
}