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
}