var friendData = require('../data/friends.js');
var path = require('path');

module.exports = function(app){
    
app.get('/api/friends', function(req,res) {
    res.json(friendData);
});


app.post('api/friends', function(req,res) { 
    var friendMatch = 0;
    var matchDifference = 1000;

    for (var i = friendData.length - 1;i >= 0; i--) {
        console.log("comparing with " + friendData[i].name);
        var totalDifference = 0;
    
    // loop through friend score and user score and calc diff btwn them - use math.abs for absolute value of given number
    for (var u = 0; u < 2; u++) {
        totalDifference = totalDifference + Math.abs(friendData[i].scores[u] - req.body.scores[u]);
    }
    
    if(totalDifference < matchDifference){
        matchDifference = totalDifference;
        friendMatch = i;
    }
    
        console.log("total difference for " + friendData[i].name + "is" + totalDifference);
  }
   
  console.log("=======================");
  console.log("best person is " + friendData[friendMatch].name + "and best score is " + matchDifference);
  console.log("=======================");

  friendData.push(req.body);

  res.json({name: friendData[friendMatch].name, photo: friendData[friendMatch].photo});
});
}

//     if (totalDifference <= friendMatch.friendDifference){
//     var friendMatch = {
//         name: "",
//         image: "",
//         matchDifference: 1000;
//     var userData = req.body;
//     var userName = userData.name;
//     var userImage = userData.image;
//     var userScore = userData.score;
//     var totalDifference = 0;
// // for loop to get each friends score
// // reset
//     friendMatch.name = friendData[i].name;
//     friendMatch.photo = friendData[i].photo;
//     friendMatch.matchDifference = totalDifference;
//     friendData.push(userData);
//     res.json(friendMatch);

