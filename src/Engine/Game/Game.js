class Game {
    constructor() {
        // setup some general stuff, like player, world, etc.
        this.World = new World(new Room());
        this.Player = new Player();

        // setup generel canvas stuff
        this.canvasMap    = document.getElementById("map");
        this.ctx          = this.canvasMap.getContext("2d");
        this.canvasIS     = document.getElementById("inventAndStat");
        this.ctxIS        = this.canvasIS.getContext("2d");
        this.canvasLegend = document.getElementById("controls");
        this.ctxLegend    = this.canvasLegend.getContext("2d");
        this.canvasInfo   = document.getElementById("infoBox");
        this.ctxInfo      = this.canvasInfo.getContext("2d");

        this.ctx.font = "20px monospace";
    }

    draw() {
        this.clearCanvases();
        this.World.renderWorld(this.ctx, new Array(this.Player, new Actor("+", "#333333", 3, 3), new Actor("<", "#00FF00", 5, 3)));
    }

    update() {
        //controls and collision
        document.addEventListener("keydown", this.Player.playerMovement, false);
        //document.addEventListener("keyup", keyUpHandler, false);

        /*function keyDownHandler(e){
            //console.log(e);
            switch(e.key) {
                case "ArrowRight":
                    this.Player.moveRight();
                    break;
                case "ArrowLeft":
                    this.Player.moveLeft();
                    break;
                case "ArrowUp":
                    this.Player.moveUp();
                    break;
                case "ArrowDown":
                    this.Player.moveDown();
                    break;
            }
        }*/

        function keyUpHandler(e){
            if(e.keyCode == 49){
                keyOnePressed = false;
            }
        }
    }

    clearCanvases() {
        this.ctx.clearRect(0, 0, this.canvasMap.width, this.canvasMap.height);
        this.ctxIS.clearRect(0, 0, this.canvasIS.width, this.canvasIS.height);
        this.ctxLegend.clearRect(0, 0, this.canvasLegend.width, this.canvasLegend.height);
    }

    // TODO: this function might not be needed
    sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }
}
