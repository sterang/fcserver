const Activities = require('./activities_controller');
module.exports=(router)=> {
    router.post('/createActivities', Activities.createActivities);
    router.post('/loadActivity', Activities.loadActivity);
    router.get('/loadAllactivities', Activities.allActivities);
    router.put('/editActivity', Activities.editActivity);
    router.delete('/deleteActivity', Activities.deleteActivity);
}