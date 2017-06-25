const server = require('express')();
var feeds = require('./feed'); 

server.get('/about', function (req, res) {
   response = {
      message:"Workshop of microservice"
   };
   res.end(JSON.stringify(response));
})

server.get('/feed', function( req, res ) {
    var id = req.params.id; 
    res.json( feeds.getAllFeeds() ); 
})

server.get('/feed/:username', function (req, res) {
    var username = req.params.username;
    if (feeds.getProfile(username).length == 0 ){
        res.status(404);
    } else {
        res.json( feeds.getProfile(username) );
    }
})

server.get('/feed/:feedId/like', function (req, res) {

})

server.listen(process.env.PORT || 3000)