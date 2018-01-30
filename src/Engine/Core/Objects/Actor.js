/**
 * An object wich can be placeble in the World.
 */
class Actor {
    constructor(appearance, color, pX = 1, pY = 1, dX = 1, dY = 1) {
        this.appearance  = appearance;
        this.color       = color;
        this.position    = new Vector2D(pX,pY);
        this.direction   = new Vector2D(dX,dY);
        this.movingSpeed = 1;
    }
}