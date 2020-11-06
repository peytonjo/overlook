class Booking {
  constructor(bookingData) {
    this.id = bookingData.id;
    this.userID = bookingData.userID;
    this.date = bookingData.date;
    this.roomNumber = bookingData.roomNumber;
    this.roomServiceCharges = bookingData.roomServiceCharges;
    this.roomsArr = [];
  }

  // unavailableRooms(date, roomDate, bookingDate){
  //   let result = 

  // }

  availableRooms(date, bookingDate){
    let result = bookingDate.reduce((acc, booking) => {
    if (booking.date === date){
      acc.push(bookingData)
    }
    return acc;
  }, [])
 }
}

export default Booking;