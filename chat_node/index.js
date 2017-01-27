// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// var redis = require('socket.io/node_modules/redis');
// var sub = redis.createClient();
 
// //Subscribe to the Redis chat channel
// sub.subscribe('chat_message');

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// // io.on('connection', function(socket){
// //   console.log('a user connected');
// //   socket.on('chat message', function(msg){
// //     io.emit('chat message', msg);
// //     console.log('message: ' + msg);
// //   });
// // });

// // http.listen(3000, function(){
// //   console.log('listening on *:3000');
// // });
// io.sockets.on('connection', function (socket) {
    
//     //Grab message from Redis and send to client
//     sub.on('message', function(channel, message){
//         socket.send(message);
//     });
    
//     //Client is sending message through socket.io
//     socket.on('send_message', function (message) {
//         values = querystring.stringify({
//             comment: message,
//             sessionid: socket.handshake.cookie['sessionid'],
//         });



var http = require('http');
var request = require('request');
var server = http.createServer().listen(4000);
var io = require('socket.io').listen(server);
var cookie_reader = require('cookie');
var querystring = require('querystring');
 
var redis = require('redis');
var sub = redis.createClient();
 
//Subscribe to the Redis chat channel
sub.subscribe('chat');
 
//Configure socket.io to store cookie set by Django
// io.configure(function(){
//     io.set('authorization', function(data, accept){
//         if(data.headers.cookie){
//             data.cookie = cookie_reader.parse(data.headers.cookie);
//             return accept(null, true);
//         }
//         return accept('error', false);
//     });
//     io.set('log level', 1);
// });

io.sockets.on('connection', function (socket) {
    
    //Grab message from Redis and send to client
    sub.on('message', function(channel, message){
        socket.send(message);
    });
    
    //Client is sending message through socket.io
    socket.on('send_message', function (data) {
        // message_split=message.split(',');
        // console.log(3);
        // console.log(sessionid);
        // console.log(socket.handshake.cookie['sessionid']);
        // values = querystring.stringify({
        //     data
        //     // csrftoken:message[2]// sessionid: message[1],
        //     // sessionid: socket.handshake.cookie['sessionid'],
        // });
        // console.log(values)
        // request({
            
        //     method:'POST',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Cookie': 'csrftoken=' + message[2]
        //     },
        // },function(res){
        //     console.log('worked');
        // });
        // request.post('http://localhost:8001/main/node_api/',{name:1});
        var options = {
            // host: 'localhost',
            // port: 8001,
            // path: '/main/node_api/',
            url: 'http://localhost:8001/main/node_api/',
            method: 'POST',
            form: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Content-Length': values.length,
                // "X-CSRFToken": message[2],
                // 'Cookie': 'csrftoken=' + message_split[2]
            }
        };
        // console.log(6);
        // var req = {}
        // //Send message to Django server
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // Print out the response body
                console.log(body)
                socket.emit('response', body)
            }
            console.log(body);
        });
        // var req=http.request(options, function(res){
        //     // res.setEncoding('utf8');
        //     console.log(4);
        //     //Print out error message
        //     // res.on('data', function(message){
        //     //     if(message != 'Everything worked :)'){
        //     //         console.log('Message: ' + message);
        //     //     }
        //     // });
        // });
        // req.write('dsghgjh');
        // req.end();
        // request.post('http://localhost:8001/main/node_api/', {'comment': message[0]});
        // while(req=={}){
        //     console.log(7);
        //         req.write(values);
        //     }
        // req.end();
    });
});



