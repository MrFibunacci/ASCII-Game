class Game {
    constructor() {
        // init some general stuff, like player, world, etc.
        this.World = new World();
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
    }

    draw() {
        this.clearCanvases();
    }

    update() {

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
