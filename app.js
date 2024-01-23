var express = require('express');
var path = require('path');
var app = express();

var indexRouter = require('./routes/index');
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use('/assets',express.static(__dirname + '/public'));

app.get('/favicon.ico',function(req, res){
  res.status(204);
  res.end()
})

app.use('/', indexRouter);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
module.exports = app;