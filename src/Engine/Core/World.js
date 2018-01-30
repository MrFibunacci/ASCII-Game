class World {
    constructor(Room) {
        this.Rooms = [];
        this.Rooms[this.Rooms.length] = Room
    }

    renderWorld(ctx, ObjectsInWorld = []) {
        this.Rooms.forEach(element => {
            element.drawRoomAtPosition(ctx, ObjectsInWorld);
        });
    }
}
