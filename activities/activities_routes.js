const Activities = require('./activities_controller');
module.exports=(router)=> {
    router.post('/create', Activities.createActivities);
    router.post('/load', Activities.loadActivities);
}