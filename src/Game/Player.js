class Player extends Character {
    constructor() {
        super("@", "#60BCEB", 100);
    }

    /**
     * Player movement handler. And Collison handling
     * I'd really like to call methods like this: "this.moveDirection();"
     * But JS is a cunt
     * @param {*} keyDownHandler 
     */
    playerMovement(keyDownHandler) {
        // some refrences for better readability
        let CurrentRoomReference   = GameInstance.World.Rooms[0];
        let PlayerReference        = GameInstance.Player;
        let playerPostionX         = PlayerReference.position.x;
        let playerPostionY         = PlayerReference.position.y;
        let cellWallAppearance     = CurrentRoomReference.CellsAppearance['wall'];

        switch(keyDownHandler.key) {
            case "ArrowRight":
                if(CurrentRoomReference.room[playerPostionY][playerPostionX+1] != cellWallAppearance) {
                    PlayerReference.moveRight();
                }
                break;
            case "ArrowLeft":
                if(CurrentRoomReference.room[playerPostionY][playerPostionX-1] != cellWallAppearance) {
                    PlayerReference.moveLeft();
                }
                break;
            case "ArrowUp":
                if(CurrentRoomReference.room[playerPostionY-1][playerPostionX] != cellWallAppearance) {
                    PlayerReference.moveUp();
                }
                break;
            case "ArrowDown":
                if(CurrentRoomReference.room[playerPostionY+1][playerPostionX] != cellWallAppearance) {
                    PlayerReference.moveDown();
                }
                break;
        }
    }
}