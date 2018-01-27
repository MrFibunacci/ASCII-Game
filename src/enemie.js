/**
 * Created by prakikant on 08.01.16.
 */
enemie = {
    appearance: "§",
    color:      "#D90202",
    health:     100,
    x: 8,
    y: 6,
    dx: 0,
    dy: 0,

    initEnem: function(){
        if(this.health > 0) {
            Map.room[this.x][this.y] = this.appearance;
            this.aiAct(character);

            if(Map.room[this.x+1][this.y] == character.appearance
                || Map.room[this.x-1][this.y] === character.appearance
                || Map.room[this.x][this.y+1] === character.appearance
                || Map.room[this.x][this.y-1] === character.appearance){

                character.health -= 2/character.gear;
            }
        }
    },

    //basic Ai
    aiAct: function (actor) {
        this.dx = this.x - actor.x;
        this.dy = this.y - actor.y;

        if (Math.abs(this.dx) + Math.abs(this.dy) > 2){
            // try to walk in random directions until you succeed once
            if (this.randomInt(10) > 5) {
                if (this.randomInt(10) > 5) {
                    if (Map.room[enemie.x + 1][enemie.y] != "#") {
                        this.x += 1;
                    }
                } else {
                    if (Map.room[enemie.x - 1][enemie.y] != "#") {
                        this.x -= 1;
                    }
                }
            } else {
                if (this.randomInt(10) > 5) {
                    if (Map.room[enemie.x][enemie.y + 1] != "#") {
                        this.y += 1;
                    }
                } else {
                    if (Map.room[enemie.x][enemie.y - 1] != "#") {
                        this.y -= 1;
                    }
                }
            }
        } else if(Math.abs(this.dx) > Math.abs(this.dy)) {
            if (this.dx < 0) {
                // left
                if(Map.room[enemie.x+1][enemie.y] != "#" && Map.room[enemie.x+1][enemie.y] != "@") {
                    this.x += 1;
                }
            } else {
                // right
                if(Map.room[enemie.x-1][enemie.y] != "#" && Map.room[enemie.x-1][enemie.y] != "@") {
                    this.x -= 1;
                }
            }
        } else {
            if (this.dy < 0) {
                // up
                if(Map.room[enemie.x][enemie.y+1] != "#" && Map.room[enemie.x][enemie.y+1] != "@") {
                    this.y += 1;
                }
            } else {
                // down
                if(Map.room[enemie.x][enemie.y-1] != "#" && Map.room[enemie.x][enemie.y-1] != "@") {
                    this.y -= 1;
                }
            }
        }
    },

    randomInt: function(max){
        return Math.floor(Math.random() * max);
    }
};