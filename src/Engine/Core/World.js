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
        // generate rooms next to each other with dors to other rooms wich completley make up the canvas
        let tempGeneratedLevelData = new Array(new Array());
        for(let x = 0; x < 1; x++) {
            let roomHeight = this.randomInt(5, this.worldMaxHeight-7);
            for(let y = 0; y < 2; y++) {
                tempGeneratedLevelData[x][y] = new Room(10, this.randomInt(5, this.worldMaxHeight-roomHeight));
            }
        }

        console.log(tempGeneratedLevelData);
        //this.Rooms.push(new Room(10, roomHeight));
        //this.Rooms.push(new Room(10, this.worldMaxHeight-roomHeight));
        //console.log(this.currentLevel);

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
