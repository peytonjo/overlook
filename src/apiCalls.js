import Booking from "./classes/Booking";
import Room from "./classes/Room";
import User from "./classes/User";

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
}

export const getBookings = () => {
  const bookingsData = JSON.parse(localStorage.getItem('bookings'))

  return bookingsData.bookings.map(booking => new Booking(booking))
}