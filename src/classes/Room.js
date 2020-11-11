class Room {
  constructor(roomData) {
    this.number = roomData.number;
    this.type = roomData.roomType;
    this.bidet = roomData.bidet;
    this.bedSize = roomData.bedSize;
    this.numBeds = roomData.numBeds;
    this.cost = roomData.costPerNight;
  }
}


export default Room;