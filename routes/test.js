const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('Client da ket noi!' + socket.id);

    socket.on('disconnect', function(){
        console.log('da thoat' + socket.id);
    });

    socket.on('client', function(data){
        // io.sockets.emit('server', data)
        // socket.emit('server', data)
        socket.broadcast.emit('server', data);
    });

});



app.get('/', (req, res) => {
    res.render('client1');
});

server.listen(3000, () => { console.log('server restar!'); });