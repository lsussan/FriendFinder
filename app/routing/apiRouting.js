var friendData = require('../data/friends.js');
// var path = require('path');

module.exports = function(app){ 
    
app.get('/api/friends', function(req,res) {
    res.json(friendData);
});


app.post('api/friends', function(req,res) { 
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };

//take the results of user survey and parse
    var userData = req.body;
    var userName = userData.name;
    var userPhoto = userData.photo;
    var userScores = userData.scores;

    totalDifference = 0;

//for loop through friend possibilites in db
    for(var i = 0; i < friends.length; i++) {
        console.log(friends[i].name)
        totalDifference = 0;

//for loop through all scores of friends db

    for(var j = 0; j < friends[i].scores[j];j++) {

// calculate difference btwn scores / sum into totalDifference

    totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

// if sum of diff is less then diff of curr best match

    if(totalDifference <= bestMatch.friendDifference){

// Reset the bestMatch to be the new friend. 
    bestMatch.name = friends[i].name;
    bestMatch.photo = friends[i].photo;
    bestMatch.friendDifference = totalDifference;
    }
  }
}

    friends.push(userData);

//return json with users best match

    res.json(bestMatch);
    });
}
