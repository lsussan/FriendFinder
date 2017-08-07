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

//     for(var i = 0; i < newFriend.scores.length; i++) {
//         if (newFriend.scores[i] == "1 (Strongly Disagree)") {
//             newFriend.scores[i] = 1;
//         } else if (newFriend.scores[i] == "5 (Strongly Agree)") {
//             newFriend.scores[i] = 5;
//         } else {
//             newFriend.scores[i] = parseInt(newFriend.scores[i]);
//         }
//     }

//     var differencesArray = [];

//     for (var i = 0; i < friendData.length; i++) {

//         var comparedFriend = friendData[i];
//         var totalDifference = 0;

//         for (var k = 0; k < comparedFriend.scores.length; k++) {
//             var differenceOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
//             totalDifference += differenceOneScore;
//         }

//         differencesArray[i] = totalDifference;
//     }

//     var bestFriendNum = differencesArray[0];
//     var bestFriendIndex = 0;

//     for (var i = 1; i < differencesArray.length; i++) {
//         if (differencesArray[i] < bestFriendNum) {
//             bestFriendNum = differencesArray[i];
//             bestFriendIndex = i;
//         }
//     }

//     friendData.push(newFriend);

//     res.json(friendData[bestFriendIndex]);
// })
// }


//     var friendMatch = 0;
//     var matchDifference = 1000;

//     for (var i = friendData.length - 1;i >= 0; i--) {
//         console.log("comparing with " + friendData[i].name);
//         var totalDifference = 0;
    
//     // loop through friend score and user score and calc diff btwn them - use math.abs for absolute value of given number
//     for (var u = 0; u < 2; u++) {
//         totalDifference = totalDifference + Math.abs(friendData[i].scores[u] - req.body.scores[u]);
//     }
    
//     if(totalDifference < matchDifference){
//         matchDifference = totalDifference;
//         friendMatch = i;
//     }
    
//         console.log("total difference for " + friendData[i].name + "is" + totalDifference);
//   }
   
//   console.log("=======================");
//   console.log("best person is " + friendData[friendMatch].name + "and best score is " + matchDifference);
//   console.log("=======================");

//   friendData.push(req.body);

//   res.json({name: friendData[friendMatch].name, photo: friendData[friendMatch].photo});
// });
// }

