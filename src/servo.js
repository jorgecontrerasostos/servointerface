const {Board, Servo} = require("johnny-five");
const board = new Board();

export default board;

board.on("ready", () => {

  /* Servo constructor with options */
  var servo = new five.Servo({
    id: "MyServo",     // Identificador del servomotor
    pin: 8,            // Pin al que está conectado
    type: "standard",  // El tipo estándar son los servomotores que no pueden girar 360° continuos
    range: [0,180],    // Se define el rango, 0 a 180
    fps: 100,          // Calcular el movimiento entre posiciones
    invert: false,     // No invertir las posiciones
    startAt: 90,       // Inicializar a 90°
    center: true,      // Inicializa a la mitad de cualquier forma
  });
 

  // Add servo to REPL (optional)
  board.repl.inject({
    servo
  });


  // Servo API

  // min()
  //
  // set the servo to the minimum degrees
  // defaults to 0
  //
  // eg. servo.min();

  // max()
  //
  // set the servo to the maximum degrees
  // defaults to 180
  //
  // eg. servo.max();

  // center()
  //
  // centers the servo to 90°
  //
  // servo.center();

  // to( deg )
  //
  // Moves the servo to position by degrees
  //
  // servo.to( 90 );

  // step( deg )
  //
  // step all servos by deg
  //
  // eg. array.step( -20 );

  servo.sweep();
});
