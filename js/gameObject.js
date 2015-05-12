
function deltaTime(anterior){
    return new Date().getTime() - anterior;
}

function gameObject(spriteSrc) {
   this.x = 0;
   this.y = 0;
   this.linha = 0;
   this.coluna = 0;
   this.numLinhas = 5;
   this.numColunas = 5;
   this.sprite = new Image();
   this.sprite.src = spriteSrc;
   this.width = 64;
   this.height = 64;
}

gameObject.prototype = {
    atualizar: function( gameTime ){
        //gameTime *= deltaTime(gameTime);
        gameTime /= 60;
        this.linha = (parseInt(gameTime)% this.numLinhas);
        this.coluna = parseInt(
            (parseInt(gameTime)%(this.numColunas*this.numLinhas))/ this.numColunas);
        this.x = 0;
        this.y = 0;
    },
    desenhar: function( context ){
        context.drawImage(this.sprite,
            this.linha*this.width, this.coluna*this.height, // na imagem
            this.width, this.height,                // na imagem
            this.x,this.y,this.width,this.height    //no canvas
        );
    }
}
