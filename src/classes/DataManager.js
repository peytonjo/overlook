// This class is to specifically to have methods to modify data that we can test
// These methods do not interact with any other class or the DOM so they reside here

export default class DataManager {
  constructor(){}

  filterRooms(value, rooms) {
    return rooms.filter(room => room.type.includes(value))
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
}