import Booking from './Booking'


export default class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.roomsBooked = [];
    this.loggedIn = false;
  }

  calculateRoomsTotal(user) {
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

  availableRooms(date, roomDate, bookingDate){
    let result = bookingDate.reduce(acc, booking)
    if (booking.date === date){

    }
  }

}

//export default User;
