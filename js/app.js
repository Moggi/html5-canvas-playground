





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
    // preenchimento vermelho
    context.fillStyle = 'red';
    context.fillRect(50,50,100,100);

    // contorno azul
    context.lineWidth =2;
    context.strokeStyle = 'blue';
    context.strokeRect(50,50,100,100);

}
