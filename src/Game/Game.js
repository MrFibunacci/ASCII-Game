class Game {
    constructor() {
        // setup some general stuff, like player, world, etc.
        this.Player = new Player();
        this.World  = new World(new Room(), new Array(this.Player, new Item("+", "#333333", "", "", 1, 3, 3)));

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
        this.World.renderWorld(this.ctx);
        this.drawLegend();
    }

    update() {
        //Movement
        document.addEventListener("keydown", this.Player.playerMovement, false);
        document.addEventListener("keydown", this.Player.interaction, false);
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

    drawLegend() {
        this.ctxLegend.font = "20px Arial";
        this.ctxLegend.fillStyle = "#000";
        this.ctxLegend.fillText("Contols: ", 5, 20);

        this.ctxLegend.font = "16px Arial";
        this.ctxLegend.fillText("ArrowKeys to move", 5, 36);
        this.ctxLegend.fillText("NUMpad 0 to hit", 5, 52);
        this.ctxLegend.fillText("ctrl to Interact", 5, 68);

        this.ctxLegend.font = "20px Arial";
        this.ctxLegend.fillStyle = "#000";
        this.ctxLegend.fillText("Legend: ", 5, 150);

        this.ctxLegend.font = "16px Arial";
        this.ctxLegend.fillStyle = this.Player.color;
        this.ctxLegend.fillText(this.Player.appearance, 5, 166);
        this.ctxLegend.fillStyle = "#000000";
        this.ctxLegend.fillText(" - You" , 25, 166);
        this.ctxLegend.fillText("#", 5, 182);
        this.ctxLegend.fillText(" - Walls", 25, 182);
        this.ctxLegend.fillText(".", 5, 198);
        this.ctxLegend.fillText(" - empty room", 25, 198);
        this.ctxLegend.fillText(" ", 5, 214);
        this.ctxLegend.fillText(" - nothing", 25, 214);
        //this.ctxLegend.fillStyle = enemie.color;
        //this.ctxLegend.fillText(enemie.appearance, 5, 230);
        //this.ctxLegend.fillStyle = "#000000";
        //this.ctxLegend.fillText(" - enemies", 25, 230);
        //this.ctxLegend.fillStyle = healPotion.color;
        //this.ctxLegend.fillText(healPotion.appearance, 5, 246);
        //this.ctxLegend.fillStyle = "#000000";
        //this.ctxLegend.fillText(" - Heal Potion", 25, 246);
    }
}
