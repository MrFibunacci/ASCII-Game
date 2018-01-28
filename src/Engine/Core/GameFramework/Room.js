class Room {
    constructor(width = 10, height = 10) {
        this.width = width;
        this.height = height;

        this.room = [];

        this.CellsAppearance = [];
        this.CellsAppearance['wall'] = '#';
        this.CellsAppearance['emptyRoom'] = '.';

        this.generateRoom();
    }

    /**
     * Loop through generated room and 
     * either draw room cell or Actor at position
     * 
     * @param {HTMLElement} ctx 
     * @param {Actor} ObjectsInWorld 
     */
    drawRoomAtPosition(ctx, ObjectsInWorld = []) {
        for(var y = 0; y < this.height; y++) {
            for(var x = 0; x < this.width; x++) {
                let flag = false;
                ObjectsInWorld.forEach(ObjectInWorld => {
                    if(flag == false) {
                        if(ObjectInWorld.position.x == x && ObjectInWorld.position.y == y) {
                            ctx.fillStyle = ObjectInWorld.color;
                            ctx.fillText(ObjectInWorld.appearance, (x*12+2), (y*17+17));
                            flag = true;
                        }
                    }
                });
                if(flag == false) {
                    ctx.fillStyle = "#000000";
                    ctx.fillText(this.room[y][x], (x*12+2), (y*17+17));
                }
            }
        }
    }

    /**
     * Generate the later necessary room data cell by cell 
     */
    generateRoom() {
        for(let y = 0; y < this.height; y++) {
            
            let tempNewRow = [];
             
            for(let x = 0; x < this.width; x++) {
                if(y == 0 || y == this.height - 1) {
                    tempNewRow[x] = this.CellsAppearance['wall'];
                } else if (x == 0 || x == this.width - 1) {
                    tempNewRow[x] = this.CellsAppearance['wall'];
                } else {
                    tempNewRow[x] = this.CellsAppearance['emptyRoom'];
                }
            }

            this.room[y] = tempNewRow;
        }
    }
}