const Activities = require('./activities_controller');
module.exports=(router)=> {
    router.post('/createActivities', Activities.createActivities);
    router.post('/loadActivity', Activities.loadActivities);
}