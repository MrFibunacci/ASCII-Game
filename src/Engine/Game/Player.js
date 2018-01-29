class Player extends Character {
    constructor() {
        super("@", "#60BCEB", 100);
    }

    /**
     * Player movement handler. I'd really like to call methods like this: "this.moveDirection();"
     * But JS is a cunt
     * @param {*} keyDownHandler 
     */
    playerMovement(keyDownHandler) {
        switch(keyDownHandler.key) {
            case "ArrowRight":
                GameInstance.Player.moveRight();
                break;
            case "ArrowLeft":
                GameInstance.Player.moveLeft();
                break;
            case "ArrowUp":
                GameInstance.Player.moveUp();
                break;
            case "ArrowDown":
                GameInstance.Player.moveDown();
                break;
        }
    }
}