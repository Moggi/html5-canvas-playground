

function DeltaTime(anterior){
    return new Date().getTime() - anterior;
}


// ===============================================================

var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

var canvas = document.createElement('canvas');
canvas.setAttribute('width',canvasWidth);
canvas.setAttribute('height',canvasHeight);
document.body.appendChild(canvas);

var context = canvas.getContext('2d');

var teclado = new Teclado(document);

startDrawing();

// ===============================================================

function startDrawing()
{

    var explosionSheet = new Image();
    explosionSheet.src = 'img/explosion.png';

    var anterior = new Date().getTime();

    // Inicia animacao
    setInterval(draw,1000/60);

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

    function draw()
    {
        // limpa o canvas
        context.clearRect(0,0,canvasWidth,canvasHeight);

        var time = anterior/50;

        var xSpriteSheet = 64 * (parseInt(time)%5);

        var ySpriteSheet = 64 * parseInt((parseInt(time)%25)/5);

        context.drawImage(explosionSheet,
            xSpriteSheet,ySpriteSheet,64,64,  // area de recorte na imagem
            0,0,64,64   // area no canvas (x,y,width,height)
        );

        if( teclado.pressionada(SETA_DIREITA) )
            console.log("direita");

        if( teclado.pressionada(SETA_ESQUERDA) )
            console.log("esquerda");

        anterior = new Date().getTime();
        // requestAnimFrame(draw);
    }
}
