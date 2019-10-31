const School = require('./school_controller');
module.exports=(router)=> {
    router.post('/createSchool', School.createSchool);
    router.post('/loadSchool', School.loadSchool);
    router.get('/loadAllSchools', School.allSchools);
    router.get('/newLoadSchools', School.newLoadSchools);
    //router.put('/modifySchool', School.modifySchool);
    router.post('/deleteSchool', School.deleteSchool);
}