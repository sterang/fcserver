const ContentREA = require('./content_controller');
module.exports=(router)=> {
    router.post('/createContentREA', ContentREA.createContentREA);
    router.post('/loadContentREA', ContentREA.loadContentREA);
    router.get('/loadAllcontents', ContentREA.allContent);
}