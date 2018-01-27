/**
 * Created by prakikant on 07.01.16.
 */
var character = {
    //properties
    appearance: "@",
    color:      "#60BCEB",
    health:     100,
    maxHealth:  100,
    damage:     5,
    gear:       1,
    activeWeapon: "",
    x: 1,
    y: 1,

    //methods
    initCharacter: function(){
        Map.room[this.x][this.y] = this.appearance;
    },

    drawStats: function(){
        var fontsize = 20;
        ctxIS.font = fontsize +"px Arial";
        ctxIS.fillStyle = "#000000";
        ctxIS.fillText("Stats:", 2, fontsize);

        //Health
        ctxIS.fillText("Health: ", 4, fontsize*2);
        ctxIS.fillText(Math.round(this.health) + "/" + this.maxHealth, 90, fontsize*2);

        //damage
        ctxIS.fillText("Damage: ", 4, fontsize*3);
        ctxIS.fillText(Math.round(this.damage), 90, fontsize*3);

        //gear
        ctxIS.fillText("Gear: " , 4, fontsize*4);
        ctxIS.fillText(Math.round(this.gear), 90, fontsize*4);

        //active weapon
        ctxIS.fillText("Weapon: ", 4, fontsize*5);
        ctxIS.fillText(this.activeWeapon, 90, fontsize*5);

        //active armor
    },
};