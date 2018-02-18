class World {
    constructor(Room, ObjectsInWorld = []) {
        this.Rooms = new Array();
        this.Rooms.push(Room);
        this.currentRoom = Room;

        this.worldMaxWidth  = 54;
        this.worldMaxHeight = 22;

        this.levels = new Array();
        this.currentLevel = new Array();
        this.ObjectsInLevel;

        this.ObjectsInWorld = ObjectsInWorld;

        this.initilaizeLevel();
    }

    initilaizeLevel() {
        this.generateLevel();
    }

    /**
     * Generate level with everything needed
     */
    generateLevel() {
        // generate rooms next to each other with dors to other rooms wich completley make up the canvas
        // TODO: Remove double walled level generation
        let TempRooms = new Array();
        for(let x = 0, randXval = this.randomInt(2, 5); x <= randXval; x++) {
            let tempCollum = new Array();
            for(let y = 0, randYval = this.randomInt(1, 4); y <= randYval; y++) {
                tempCollum.push(new Room(Math.round(this.worldMaxWidth/randXval), Math.round(this.worldMaxHeight/randYval)));
            }
            TempRooms.push(tempCollum);
        }

        console.log(TempRooms);

        let tempLevel = new Room(0,0);
        TempRooms.forEach(function(RoomsColls, roomX) {
            let roomColls = new Array()
            RoomsColls.forEach(function(Room, roomY) {
                
                Room.room.forEach(function(coll) {
                    roomColls.push(coll);
                });
            });
            console.log(roomColls);
        });

        // make an "Stairway" to next Level
        // put items and enemies in it
        // put player in it
    }

    /**
     * Loop through generated level and 
     * either draw cell or Actor at position
     */
    renderWorld(ctx) {
        for(var y = 0; y < this.height; y++) {
            for(var x = 0; x < this.width; x++) {
                let flag = false;
                this.ObjectsInLevel.forEach(ObjectInLevel => {
                    if(flag == false) {
                        if(ObjectInLevel.position.getX() == x && ObjectInLevel.position.getY() == y) {
                            this.ctx.fillStyle = ObjectInLevel.color;
                            this.ctx.fillText(ObjectInLevel.appearance, (x*12+2), (y*17+17));
                            flag = true;
                        }
                    }
                });
                if(flag == false) {
                    this.ctx.fillStyle = "#000000";
                    this.ctx.fillText(this.currentLevel[y][x], (x*12+2), (y*17+17));
                }
            }
        }
    }

    // little helper
    randomInt(min, max){
        return Math.floor((Math.random() * (max - min)) + min);
    }
}
