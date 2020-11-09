import User from '../src/User';
import Booking from '../src/Booking'
import Room from '../src/Room'


describe('Booking', function() {
  let user1;
  let user2;
  let user3;
  let booking1;
  let booking2;
  let booking3;
  let room1;
  let room2;
  let room3;
  beforeEach(() => {
    user1 = new User({
      'id': 1,
      'name': 'Leatha Ullrich',
    });
    user2 = new User ({
      "id": 2,
      "name": "Rocio Schuster"
    });
    user3 = new User ({
      "id": 3,
      "name": "Kelvin Schiller"
    })
    booking1 = new Booking ({
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 1,
      "date": "2020/04/22",
      "roomNumber": 15,
      "roomServiceCharges": []
    })
    booking2 = new Booking ({
      "id": "5fwrgu4i7k55hl6t5",
      "userID": 43,
      "date": "2020/01/24",
      "roomNumber": 24,
      "roomServiceCharges": []
    })
    booking3 = new Booking ({
      "id": "5fwrgu4i7k55hl6t6",
      "userID": 1,
      "date": "2020/01/10",
      "roomNumber": 12,
      "roomServiceCharges": []
    })
    room1 = new Room ({
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    })
    room2 = new Room ({
      "number": 2,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 2,
      "costPerNight": 477.38
    })
    room3 = new Room ({
      "number": 3,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "king",
      "numBeds": 1,
      "costPerNight": 491.14,
    })
  })
  // it('should be able to view all rooms availble for a specific date', function() {
  //   let openRooms = availableRooms()
  //   expect(availableRooms("2020/04/22")).to.equal()
  // })

// I should be able to select a date for which I’d like to book a room for myself
// Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date
// I should be able to filter the list of available rooms by their roomType property
// I should be able to select a room for booking
// In the event that no rooms are available for the date/roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search

})
