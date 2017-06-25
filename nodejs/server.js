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
    var profile = feeds.getProfile(username);
    if (profile.length == 0 ){
        res.status(404);
        res.send('User ' + username + ' not found');
    } else {
        res.json( profile );
    }
})

server.get('/feed/:feedId/like', function (req, res) {

})

server.listen(process.env.PORT || 3000)