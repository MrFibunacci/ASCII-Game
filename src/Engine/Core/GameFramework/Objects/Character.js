class Character extends Pawn {
    constructor(appearance, 
                color, 
                health = 100, 
                pX = 1, pY = 1, 
                dX = 1, dY = 1,
                inventory = [], 
                activeWeapon = null,
                activeGear = null
            ){
        super(appearance, color, pX, pY, dX, dY);

        this.currentHealth = health;
        this.maxHealth     = health;
        this.damage        = 1;
        this.gear          = 0;
        this.inventory     = inventory;
        this.activeWeapon  = activeWeapon;
        this.activeGear    = activeGear;
    }

    // --- Inventory actions: ---
    pickUpItem() {}
    dropItem() {}
    useItem() {}
    selectItem() {}
}