var express = require('express');
var next = require('next');
var dev = process.env.NODE_ENV !== 'production';
var app = next({ dev: dev });
var handle = app.getRequestHandler();
app.prepare().then(function () {
    var server = express();
    server.get('*', function (req, res) {
        return handle(req, res);
    });
    server.listen(3000, function (err) {
        if (err)
            throw err;
        console.log('> Running on localhost:3000');
    });
})["catch"](function (ex) {
    console.error(ex.stack);
    process.exit(1);
});
