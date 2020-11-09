import Booking from './classes/Booking'


export default class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.roomsBooked = [];
    this.loggedIn = false;
  }

  calculateRoomCosts() {
    const result = this.roomsBooked.reduce((totalRoomCost, room) => {
      totalRoomCost += room.cost 

      return totalRoomCost;
    }, 0)

    return result;
  }

  bookRoom(room) {
    this.roomsBooked.push(room)
  }

  getBookedHistory() {
    return this.roomsBooked
  }

  findAvailableRooms(date, rooms, bookings) {
    const availableBookings = bookings.filter(booking => {
      return booking.date !== date
    })
    
    const availableRooms = availableBookings.map(booking => {
      const result = rooms.find(room => room.number === booking.roomNumber)
    
      return result
    })

    return availableRooms
  }

  filterRooms(value, rooms) {
    return rooms.filter(room => room.type === value)
  }
}


