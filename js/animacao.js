
function Animacao(context){
    this.context = context;
    this.sprites = [];
    this.ligado = false;
    this.gameTime = 0;
}

Animacao.prototype = {
    novoSprite: function(sprite) {
        this.sprites.push(sprite);
    },
    ligar: function() {
        console.log('Ligando');
        this.ligado = true;
        this.gameTime = new Date().getTime();
        this.proximoFrame();
    },
    desligar: function() {
        console.log('Desligando');
        this.ligado = false;
    },
    proximoFrame: function() {
        // Posso continuar?
        if ( !this.ligado )
            return;

        // A cada ciclo, limpamos a tela ou desenhamos um fundo
        this.limparTela();

        // Atualizamos o estado dos sprites
        for (var i in this.sprites)
            this.sprites[i].atualizar(this.gameTime);

        // Desenhamos os sprites
        for (var i in this.sprites)
        {
            this.sprites[i].desenhar(this.context);
        }
        var fps = String(deltaTime(this.gameTime));
        this.context.save();
        this.context.fillStyle = 'red';
        this.context.strokeStyle = 'black';
        this.context.font = '30px sans-serif';
        this.context.fillText(fps,200,200);
        this.context.strokeText(fps,200,200);
        this.context.restore();

        this.gameTime = new Date().getTime();
        // Chamamos o próximo ciclo
        var animacao = this;
        requestAnimationFrame(function() {
            animacao.proximoFrame();
        });
    },
    limparTela: function() {
        var ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}
