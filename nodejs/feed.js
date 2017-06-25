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

// exports.findById = function (id) {
//     // for (var i = 0; i < users.length; i++) {
//     //     if (users[i].id == id) return users[i];
//     // }
// };

// exports.addUser = function( username, name, position ) {

//     //get Id 
//     var id = 0; 
//     for (var i = 0; i < users.length; i++) {
//         if ( users[i].id >= id ) 
//             id = users[i].id + 1; 
//     }

//     var newUser = {
//         "id": id,
//         "username": username,
//         "name": name,
//         "position": position
//     }; 

//     users.push(
//         newUser
//     ); 
// }; 

