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
        let CurrentRoomReference   = GameInstance.World.currentRoom;
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

    interaction(keyDownHandler) {
        let PlayerReference = GameInstance.Player;
        let playerPostion   = PlayerReference.position;

        // if player is next to or on an item pick it up if Interact is pressed and remove actor from map
        if(keyDownHandler.code == "ControlRight") {            
            GameInstance.World.ObjectsInWorld.forEach(function(element, index) {
                if(playerPostion.isOnActor(element) && element instanceof Item) {
                    // pick Item  up
                    PlayerReference.pickUpItem(element);
                    GameInstance.World.ObjectsInWorld.splice(index, 1);
                }
            });
        }
    }
}