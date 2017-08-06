var path = require('path');

module.exports = function(app){
//html get route homepage
    app.get('/', function(req,res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    }); 
//html get route survey page
    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });


//if no match route send to home
    app.use(function(req,res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

}