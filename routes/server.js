const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('client da ket noi!' + socket.id);

    socket.on('disconnect', function () {
        console.log('Da thoat' + socket.id);
    });

    socket.on('client', function(data){

        // io.sockets.emit('server', data) //gui full
        // socket.emit('server', data) //gui chinh no
        socket.broadcast.emit('server', data); //gui cho nhung tg khac
        // console.log(data);
    });

});

app.get('/', (req, res) => {
    res.render('client');
});


//server.listen(8000, () => { console.log('da bat'); });