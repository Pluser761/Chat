var express = require('express');
var eng = require('ejs')
var app = express();


app.engine('html', eng.renderFile);

app.get('/', function(req, res){
    res.render('index.html');
});

app.listen(3000, () => {
    console.log('Server start');
});