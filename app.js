var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(8081));
var five = require('johnny-five');

const { Board, Servo } = require("johnny-five");
const board = new Board();

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/src/index.html');
});

board.on("ready", () => {

  /* Servo constructor with options */
  var servo = new five.Servo({
    id: "MyServo",     // Identificador del servomotor
    pin: 8,            // Pin al que está conectado
    type: "standard",  // El tipo estándar son los servomotores que no pueden girar 360° continuos
    range: [0, 180],    // Se define el rango, 0 a 180
    fps: 100,          // Calcular el movimiento entre posiciones
    invert: false,     // No invertir las posiciones
    startAt: 90,       // Inicializar a 90°
    center: true,      // Inicializa a la mitad de cualquier forma
  });

  // Add servo to REPL (optional)
  board.repl.inject({
    servo
  });

  servo.to(90);

  io.on('connection', function (socket) {
    socket.on('center', function () {
      servo.center();
    });

  });
});
