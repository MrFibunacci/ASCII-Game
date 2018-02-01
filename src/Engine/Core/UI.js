class UI {
    constructor() {
        // setup generel canvas stuff
        this.canvasMap    = document.getElementById("map");
        this.ctx          = this.canvasMap.getContext("2d");
        this.canvasIS     = document.getElementById("inventAndStat");
        this.ctxIS        = this.canvasIS.getContext("2d");
        this.canvasLegend = document.getElementById("controls");
        this.ctxLegend    = this.canvasLegend.getContext("2d");
        this.canvasInfo   = document.getElementById("infoBox");
        this.ctxInfo      = this.canvasInfo.getContext("2d");

        this.fontsize = 20;
        this.ctx.font = this.fontsize + "px monospace";
    }

    drawInventory(Inventory) {
        this.ctxIS.font = this.fontsize +"px monospace";
        this.ctxIS.fillStyle = "#000000";
        this.ctxIS.fillText("Inventar:", this.canvasIS.width/2-40, this.fontsize);

        let i = 1;
        Inventory.ItemList.forEach(ItemInInventory => {
            this.ctxIS.fillStyle = "#899184";
            this.ctxIS.fillText(ItemInInventory.name + ": ", this.canvasIS.width / 2 - 35, this.fontsize * i + 20);
            this.ctxIS.fillStyle = "#000000";

            i++;
        });
    }

    drawStats(Player) {
        this.ctxIS.font = this.fontsize +"px Arial";
        this.ctxIS.fillStyle = "#000000";
        this.ctxIS.fillText("Stats:", 2, this.fontsize);

        //Health
        this.ctxIS.fillText("Health: ", 4, this.fontsize*2);
        this.ctxIS.fillText(Math.round(Player.currentHealth) + "/" + Player.maxHealth, 90, this.fontsize*2);

        //damage
        this.ctxIS.fillText("Damage: ", 4, this.fontsize*3);
        this.ctxIS.fillText(Math.round(Player.damage), 90, this.fontsize*3);

        //gear
        this.ctxIS.fillText("Gear: " , 4, this.fontsize*4);
        this.ctxIS.fillText(Math.round(Player.gear), 90, this.fontsize*4);

        //active weapon
        this.ctxIS.fillText("Weapon: ", 4, this.fontsize*5);
        this.ctxIS.fillText(Player.activeWeapon, 90, this.fontsize*5);

        //active armor
        this.ctxIS.fillText("Armor: ", 4, this.fontsize*6);
        this.ctxIS.fillText(Player.activeGear, 90, this.fontsize*5);
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
        this.ctxLegend.fillStyle = GameInstance.Player.color;
        this.ctxLegend.fillText(GameInstance.Player.appearance, 5, 166);
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

    clearCanvases() {
        this.ctx.clearRect(0, 0, this.canvasMap.width, this.canvasMap.height);
        this.ctxIS.clearRect(0, 0, this.canvasIS.width, this.canvasIS.height);
        this.ctxLegend.clearRect(0, 0, this.canvasLegend.width, this.canvasLegend.height);
    }
}