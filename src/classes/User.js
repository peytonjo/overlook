import { getBookings, getRooms } from '../apiCalls';
import Booking from './Booking'


export default class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.roomsBooked = [];
    this.loggedIn = false;
  }

  calculateRoomCosts() {
    const rooms = getRooms()
    const total = this.roomsBooked.reduce((totalRoomCost, booking) => {
      const room = rooms.find(room => room.number === parseInt(booking.roomNumber))
    
      totalRoomCost += room.cost 
      
      return totalRoomCost;
    }, 0)
    
    return total.toFixed(2);
  }

  bookRoom(room) {
    this.roomsBooked.push(room)
  }

  getBookedHistory() {
    const bookings = getBookings()

    const usersBookings = bookings.filter(booking => {
      return booking.userID === this.id
    })

    this.roomsBooked = usersBookings

    return this.roomsBooked
  }
}


