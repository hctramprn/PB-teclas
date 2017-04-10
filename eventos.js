document.addEventListener("keydown", dibujarTeclado);
var canvas = document.getElementById("areaDeDibujo");
var lienzo = canvas.getContext("2d");


var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};


function dibujar(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

var x = canvas.width/2;
var y = canvas.height/2;
var colorcito = "blue";
var movimiento = 5;

dibujar(colorcito, x - 1, y - 1, x + 1, y + 1);

function dibujarTeclado(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      dibujar(colorcito, x, y, x, y - movimiento);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujar(colorcito, x, y, x, y + movimiento);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujar(colorcito, x, y, x - movimiento, y);
      x = x - movimiento;
      break;
    case teclas.RIGHT:
      dibujar(colorcito, x, y, x + movimiento, y);
      x = x + movimiento;
      break;
    default:
      console.log("Utiliza las flechas");

  }
}
