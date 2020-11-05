const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

import { expect } from 'chai'
import User from '../src/User';
import Booking from '../src/Booking'
import Room from '../src/Room'




describe('User', function() {
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

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be able to book a room', function() {
    user1.bookRoom(room1)

    expect(user1.roomsBooked.length).to.equal(1)
    expect(user1.roomsBooked[0]).to.equal(room1)
  })

  it('should find the users rooms', function() {
    user1.bookRoom(room1)
    user1.bookRoom(room3)

    const rooms = user1.getBookedHistory()

    expect(rooms).to.deep.equal([room1, room3])
  });

  it('should calculate total spent on rooms', function() {
    user1.bookRoom(room1)
    user1.bookRoom(room3)

    expect(user1.calculateRooms()).to.equal(849.54)
  })
})
