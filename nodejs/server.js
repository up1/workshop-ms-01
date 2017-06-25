const Prometheus = require('prom-client')

var server = require('express')();
var bodyParser = require('body-parser')
var feeds = require('./feed'); 

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('/prometheus', (req, res) => {
  res.end(Prometheus.register.metrics())
})

const PrometheusMetrics = {
  requestCounter: new Prometheus.Counter('throughput', 'The number of requests served'),
  homeCounter: new Prometheus.Counter('home_counter', 'The number of requests on home page'),
  aboutCounter: new Prometheus.Counter('about_counter', 'The number of requests on about page'),
  feedCounter: new Prometheus.Counter('feed_counter', 'The number of requests on feed'),
  likeCounter: new Prometheus.Counter('like_counter', 'The number of total likes')
}

server.use((req, res, next) => {
  PrometheusMetrics.requestCounter.inc()
  next()
})

server.get('/about', function (req, res) {
    PrometheusMetrics.aboutCounter.inc()
    response = {
        message:"Workshop of microservice"
    };
    res.end(JSON.stringify(response));
})

server.get('/feed', function( req, res ) {
    PrometheusMetrics.feedCounter.inc()
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
    PrometheusMetrics.likeCounter.inc()
    var id = req.params.id; 
    feeds.addLike( id ); 
    res.json( feeds.getFeedById(id) ); 
}); 

server.post( '/feed/', function( req, res) {
    var username = req.body.username;
    var content  = req.body.content;
    var updatedFeeds = feeds.addFeed( username, content );
    res.json( updatedFeeds );
})

server.listen(process.env.PORT || 3000)