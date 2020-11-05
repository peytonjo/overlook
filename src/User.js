class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.roomsBooked = [];
    this.loggedIn = false;
  }

  calculateRooms(user) {
    let result = this.roomsBooked.reduce((acc, room) => {
      acc += room.cost 
      return acc;
    }, 0)

    return result;
  }

  bookRoom(room) {
    this.roomsBooked.push(room)
  }

  getBookedHistory() {
    return this.roomsBooked
  }

}

export default User;
