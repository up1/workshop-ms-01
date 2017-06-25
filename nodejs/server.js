var server = require('express')();
var bodyParser = require('body-parser')
var feeds = require('./feed'); 

server.get('/about', function (req, res) {
   response = {
      message:"Workshop of microservice"
   };
   res.end(JSON.stringify(response));
})

server.get('/feed', function( req, res ) {
    res.json( feeds.getAllFeeds() ); 
})

server.get('/feed/:username', function (req, res) {
    var username = req.params.username;
    res.json( feeds.getProfile(username) );
})

server.post( '/feed/:id/like', function( req, res ) {
    var id = req.params.id; 
    feeds.addLike( id ); 
    res.json( feeds.getFeedById(id) ); 
}); 

server.listen(process.env.PORT || 3000)