const Type = require('./type_controller');
module.exports=(router)=> {
    router.post('/createType', Type.createType);
    router.post('/loadType', Type.loadType);
    router.get('/loadAllTypes', Type.allTypes);
    router.get('/newLoadTypes', Type.newLoadTypes);
    //router.put('/modifyType', Type.modifyType);
    router.post('/deleteType', Type.deleteType);
}