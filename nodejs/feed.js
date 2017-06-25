var feeds = [
    {
        "feedId": 1,
        "username": "chairat",
        "content": "Hello World",
        "like": "1"
    }, 

    {
        "feedId": 2,
        "username": "wichanart",
        "content": "I am sleepy",
        "like": "10"
    }, 

    {
        "feedId": 3,
        "username": "isara",
        "content": "Me too",
        "like": "100"
    }
];

exports.getAllFeeds = function() {
    return feeds;
};

exports.addLike = function(id) {
    for (var i=0;i<feeds.length;i++){
        if(feeds[i].feedId == id){
            feeds[i].like++;
        }
    }
}; 

exports.getFeedById = function( id ) { 
    for (var i=0;i<feeds.length;i++){
        if(feeds[i].feedId == id){
            return feeds[i];
        }
    }
}; 

exports.addFeed = function( username, content ){
    var feed = {};
    feed.feedId   = feeds.length + 1;
    feed.username = username;
    feed.content  = content;
    feed.like     = 0;
    feeds.push(feed);
    return feed;
};

exports.getProfile = function(username) {
    var profileFeed=[];
    for (var i=0;i<feeds.length;i++){
        if(feeds[i].username == username){
            profileFeed.push(feeds[i]);
        }
    }
    return profileFeed;
};

