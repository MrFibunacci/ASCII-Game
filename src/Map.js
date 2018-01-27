/**
 * Created by prakikant on 06.01.16.
 */

var Map = {
    //properties
    activeMap: 0,
    fontsize:  20,
    map:       [],

    //room props
    x:      1,
    y:      1,
    height: 10,
    width:  10,
    room:   [],


    //TODO: so um bauen das die map mit random Räumen generiert wird und
    //methods
    drawMap: function(){
        switch(this.activeMap){
            case 0: this.initToDrawingMap(); break;
        }
    },

    initToDrawingMap: function(){
        ctx.font = this.fontsize+"px monospace";

        this.genRoom(function(){
            sleep(100); //slow the game down
            character.initCharacter();
            //enemie.initEnem();
            firstSword.initfSword();
        });

        this.drawRoomAtPosition(this.x,this.y);
    },

    drawRoomAtPosition: function(rx,ry){
        for(var y = 0; y < this.height; y++){
            for(var x = 0; x < this.width; x++){
                if(this.room[y][x] == character.appearance){
                    ctx.fillStyle = character.color;
                    ctx.fillText(this.room[y][x], (x*12+2)+rx, (y*17+17)+ry);

                } else if(this.room[y][x] == enemie.appearance){
                    ctx.fillStyle = enemie.color;
                    ctx.fillText(this.room[y][x], (x*12+2)+rx, (y*17+17)+ry);

                } else {
                    ctx.fillStyle = "#000000";
                    ctx.fillText(this.room[y][x], (x*12+2)+rx, (y*17+17)+ry);
                }
            }
        }
    },

    genRandomRoom: function(){
        this.height = randomInt(5,15);
        this.width  = randomInt(5,15);

        for (var y = 0; y < this.height; y++) {
            var newRow = [];

            if (y === 0 || y === this.height - 1) {
                for (var x = 0; x < this.width; x++) {
                    newRow[x] = "#";
                }
            } else {
                for (x = 0; x < this.width; x++) {
                    if (x === 0 || x == this.width - 1) {
                        newRow[x] = "#";
                    } else {
                        newRow[x] = ".";
                    }
                }
            }

            this.room[y] = newRow;
        }

        this.map.push(this.room);
    },

    genRoom: function(drawCallback){
        for (var y = 0; y < this.height; y++) {
            var newRow = [];

            if (y === 0 || y === this.height - 1) {
                for (var x = 0; x < this.width; x++) {
                    newRow[x] = "#";
                }
            } else {
                for (x = 0; x < this.width; x++) {
                    if (x === 0 || x == this.width - 1) {
                        newRow[x] = "#";
                    } else {
                        newRow[x] = ".";
                    }
                }
            }

            this.room[y] = newRow;
        }

        drawCallback();
    }
};