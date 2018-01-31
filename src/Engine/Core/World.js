class World {
    constructor(Room, ObjectsInWorld = []) {
        this.Rooms = [];
        this.Rooms.push(Room);

        this.currentRoom = Room;

        this.ObjectsInWorld = ObjectsInWorld;
    }

    renderWorld(ctx) {
        this.Rooms.forEach(element => {
            element.drawRoomAtPosition(ctx, GameInstance.World.ObjectsInWorld);
        });
    }
}
