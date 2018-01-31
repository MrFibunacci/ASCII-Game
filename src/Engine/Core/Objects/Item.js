class Item extends Actor {
    constructor(appearance, color, name = null, description = null, value = 1, pX = 1, pY = 1, dX = 1, dY = 1){
        super(appearance, color, pX, pY, dX, dY);

        this.name      = name;
        this.direction = description;
        this.value     = value;
    }
}