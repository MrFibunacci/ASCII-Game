class Game {
    constructor() {
        // setup some general stuff, like player, world, etc.
        this.Player = new Player();
        this.World  = new World(new Room(), new Array(this.Player, new Item("+", "#333333", "some cross", "", 1, 3, 3)));

        this.UI = new UI();
    }

    draw() {
        this.UI.clearCanvases();
        this.UI.drawLegend();
        this.UI.drawInventory(this.Player.inventory);
        this.UI.drawStats(this.Player);
        this.World.renderWorld(this.UI.ctx);
    }

    update() {
        //Movement
        document.addEventListener("keydown", this.Player.playerMovement, false);
        //Interaction
        document.addEventListener("keydown", this.Player.interaction, false);
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
