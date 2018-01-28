class Player extends Character {
    constructor() {
        super("@", "#60BCEB", 100);
    }

    playerMovement(keyDownHandler) {
        switch(keyDownHandler.key) {
            case "ArrowRight":
                this.moveRight();
                break;
            case "ArrowLeft":
                this.moveLeft();
                break;
            case "ArrowUp":
                this.moveUp();
                break;
            case "ArrowDown":
                this.moveDown();
                break;
        }
    }
}