import Booking from "./classes/Booking";
import Room from "./classes/Room";
import User from "./classes/User";
import { roomSearch } from "./domElements";

export const getData = (url) => {
  try {
    const data = fetch(url)
    .then(response => {
      return response.json()
    }).then(data => {
      return data
    });
    
    return data;
  } catch(error) {
    throw new Error('Failed to fetch: ' + error)
  }
}

export const postData = async (url, data) => {
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  try {
    const data = fetch(url, parameters)
    .then(response => {
      return response.json()
    }).then(data => {
      return data
    })

    return data;
  } catch(error) {
    throw new Error('Failed to fetch: ' + error)
  }
}

export const getUsers = () => {
  const usersData = JSON.parse(localStorage.getItem('users'))
  
  return usersData.users.map((data) => new User(data))
}

export const getRooms = () => {
  const roomsData = JSON.parse(localStorage.getItem('rooms'))

  return roomsData.rooms.map(room => new Room(room))

  // return getData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
  //   .then((roomsData) => {
  //     return roomsData.rooms.map((data) => {
  //       return new Room(data);
  //     })
  //   })
  //   .catch(error => console.log(error));
}

export const getBookings = () => {
  const bookingsData = JSON.parse(localStorage.getItem('bookings'))

  return bookingsData.bookings.map(booking => new Booking(booking))

  // return getData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
  //   .then((bookingsData) => {
  //     return bookingsData.bookings.map((data) => {
  //       return new Booking(data);
  //     })
  //   })
  //   .catch(error => console.log(error));
}