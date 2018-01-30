/**
 * An Placeble object wich can be moved around.
 */
class Pawn extends Actor {
    moveLeft() {
        this.position.subX();
    }

    moveRight() {
        this.position.addX();
    }

    moveUp() {
        this.position.subY();
    }

    moveDown() {
        this.position.addY();
    }
}