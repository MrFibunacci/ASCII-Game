class Room {
    // Max room param w54 h22
    constructor(width = 10, height = 10) {
        this.width = width;
        this.height = height;

        this.room = [];

        this.CellsAppearance = [];
        this.CellsAppearance['wall'] = '#';
        this.CellsAppearance['emptyRoom'] = '.';

        /**
         * Generate the later necessary room data cell by cell 
         */
        if(this.width == 0 && this.height == 0) {
            this.room.push(new Array());
        }

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

    /**
     * adding room cells to a row
     * @param {Number} row 
     * @param {Array} rowCells 
     */
    addToRow(rowCells) {
        console.log(row + this.room.length);
        this.room[this.room.length] = rowCells;
    }

    /**
     * adding room cells next to a row
     * @param {Number} row 
     * @param {Array} rowCells 
     */
    addRowsNextToRow(rowCells) {
        this.room[this.room.length-1].concat(rowCells);
    }

    /**
     * adding room cells to a collum
     * @param {Array} collumData 
     */
    addToCollum(collumData) {
        for(let i = 0; i <= collumData.length-1; i++) {
            if(this.room[i] === undefined) {
                this.room.push(new Array(collumData[i]));
            } else {
                this.room[i][this.room[i].length] = collumData[i];
            }
        }
        this.resetWidthHeightAttributes();
    }

    resetWidthHeightAttributes() {
        this.width  = this.room[0].length;
        this.height = this.room.length;
    }
}