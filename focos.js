var express=require ("express");
var app = express();
var io= require("socket.io")(app.listen(3000));
var five=require("johnny-five");
 
board= new five.Board ({
 
    port: "COM3"
});
 
board.on ("ready" ,function (){
    var verde =new five.Led(13);
    var rojo=new five.Led(12);
    console.log("Placa lista para recibir mensajes");
    io.sockets.on('connection', function (socket) {
        socket.on('foco1-on', function (){
            console.log ("Envio de mensaje toggle");
            verde.on();
        	});
        });
    io.sockets.on('connection', function (socket) {
        socket.on('foco2-on', function (){
            console.log ("Envio de mensaje toggle");
            rojo.on();
            });
        });
    io.sockets.on('connection', function (socket) {
        socket.on('foco1-off', function (){
            console.log ("Envio de mensaje toggle");
            verde.off();
            });
        });
        io.sockets.on('connection', function (socket) {
        socket.on('foco2-off', function (){
            console.log ("Envio de mensaje toggle");
            rojo.off();
        });
    });
});