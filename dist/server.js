var express = require('express');
var fallback = require('express-history-api-fallback')
var path = require('path');
app = express();
app.use(express.static(__dirname));
app.use(fallback('index.html', {root:__dirname}));

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);