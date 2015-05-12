





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
    // lembre-se: context.arc(x,y,raio,inicio,termino,sentido);
    // x,y do centro
    // raio em pixels
    // inicio e termino em radianos ( = graus * Math.PI/180 )
    // sentido: null ou false = anti-horario / true=horario

    context.fillStyle = 'gray';
    context.strokeStyle = 'black';
    context.lineWidth = 2;

    context.beginPath();

        context.arc(50,50,40,90*Math.PI/180,270*Math.PI/180,false); //anti-horario

        context.fill();

    context.stroke();

    context.beginPath();

        context.arc(250,50,40,0,2*Math.PI);

        context.fill();

    context.stroke();



}
