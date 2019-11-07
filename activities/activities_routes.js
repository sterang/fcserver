const Activities = require('./activities_controller');
module.exports=(router)=> {
    router.post('/createActivity', Activities.createActivity);
    router.post('/loadActivity', Activities.loadActivity);
    router.get('/loadAllActivities', Activities.allActivities);
    router.post('/uploadActivity', Activities.uploadActivity);
    router.post('/deleteActivity', Activities.deleteActivity);
}