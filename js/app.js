





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
    // inicia novo path (apagando desenhos anteriores)
    context.beginPath();

    // posiciona a caneta virtual num determinado ponto
    context.moveTo(75,250);
    context.lineTo(150,50);
    context.lineTo(225,250);
    context.lineTo(50,120);
    context.lineTo(250,120);
    context.lineTo(75,250);

    // configurar a linha
    context.lineWidth = 2;
    context.strokeStyle = 'red';

    // contonar a area desenhada
    context.stroke();

}
