class Room {
  constructor(data) {
    this.num = data.number;
    this.type = data.roomType;
    this.bidet = data.bidet;
    this.bedSize = data.bedSize;
    this.numBeds = data.numBeds;
    this.cost = data.costPerNight;
  }
}


export default Room;