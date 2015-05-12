





window.onload = function()
{
    var canvasWidth = window.innerWidth;
    var canvasHeight = window.innerHeight;

    var canvas = document.createElement('canvas');
    canvas.setAttribute('width',canvasWidth);
    canvas.setAttribute('height',canvasHeight);
    document.body.appendChild(canvas);

    var context = canvas.getContext('2d');


    startDrawing(context);

};

function startDrawing(context)
{
    var image = new Image();
    image.src = 'img/doge.png';

    var coin = new Image();
    coin.src = 'img/coin.png';

    //context.drawImage(imagem,x,y,with,height);
    //context.drawImage(imagem,xOrigem,yOrigem,widthOrigem,heightOrigem,
    //  xDestino,yDestino, widthDestino, heightDestino);

    context.drawImage(image,0,0,375,360);

    var x=400;
    for(var i=1; i<=5; i++, x+=32)
        context.drawImage(coin,x,200,32,32);

    context.drawImage(coin,400,100,64,64);


    var explosionSheet = new Image();
    explosionSheet.src = 'img/explosion.png';

    context.drawImage(explosionSheet,
        128,192,64,64,  // area de recorte na imagem
        500,100,64,64   // area no canvas (x,y,width,height)
    );



}
