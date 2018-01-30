/**
 * The core mechanics of an Character owning Items
 */
class Inventory {
    constructor(InitWithItems = []) {
        this.ItemList = InitWithItems;
    }

    addToInventory(Item) {
        this.ItemList[this.ItemList.length] = Item;
    }

    // TODO: think of an reasonable system to aproach the items inside the inventory
    removeFromInventory() {}
}