/**
 * An basic 2D Vector Class.
 * For proper Math stuff 'n shit.
 */

class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX(){
        return this.x;
    }

    setX(newX){
        this.x = newX;
    }

    addX(val = 1){
        this.setX(this.getX()+val);
    }

    subX(val = 1){
        this.setX(this.getX()-val);
    }
    
    getY(){
        return this.y;
    }

    setY(newY){
        this.y = newY;
    }

    addY(val = 1){
        this.setY(this.getY()+val);
    }

    subY(val = 1){
        this.setY(this.getY()-val);
    }

    /**
     * return true if distance to other actor is 0
     * 
     * @param {Actor} Actor
     */
    isOnActor(Actor) {
        if(this.distanceTo(Actor.position) == 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Gives you the distance between to Points
     * 
     * @param {Vector2D} v2 seccond Vector
     */
    distanceTo(v2) {
        let v2x = null;
        let v2y = null;
        if(v2 instanceof Vector2D) {
            v2x = v2.getX();
            v2y = v2.getY();
        } else {
            console.log("You need to give me an Vector2D Object, you massive cunt.");
            return false;
        }

        return Math.sqrt(
                    Math.pow((this.getX() - v2x), 2) 
                  + Math.pow((this.getY() - v2x), 2)
                );
    }
}