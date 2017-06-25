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
    var profile = feeds.getProfile(username);
    if (profile.length == 0 ){
        res.status(404);
        res.send('User ' + username + ' not found');
    } else {
        res.json( profile );
    }
})

server.post( '/feed/:id/like', function( req, res ) {
    var id = req.params.id; 
    feeds.addLike( id ); 
    res.json( feeds.getFeedById(id) ); 
}); 

server.post( '/feed', function( req, res) {
    var username = req.body.username;
    var content  = req.body.content;
    var feeds = feeds.addFeed( username, content );
    res.json( feeds );
})

server.listen(process.env.PORT || 3000)