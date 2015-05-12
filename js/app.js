


var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

var canvas = document.createElement('canvas');

canvas.setAttribute('width',canvasWidth);
canvas.setAttribute('height',canvasHeight);
document.body.appendChild(canvas);

var context = canvas.getContext('2d');

var teclado = new Teclado(document);

var animacao = new Animacao(context);

( animacao.ligar )();

// ===============================================================

var explosion = new gameObject('img/explosion.png');

animacao.novoSprite(explosion);


// Inicia animacao
// setInterval(draw,1000/60);

// alto consumo de processamento
// window.requestAnimationFrame( draw );

// window.requestAnimFrame = (function(){
//     return  window.requestAnimationFrame    ||
//         window.webkitRequestAnimationFrame  ||
//         window.mozRequestAnimationFrame     ||
//         window.oRequestAnimationFrame       ||
//     function( callback ){
//         window.setTimeout(callback, 1000 / 60);
//       };
// })();
