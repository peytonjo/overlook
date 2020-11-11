// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

//import './images/hotel-room.webp'
import { getUsers, getRooms, getBookings, getData, postData } from './apiCalls';
import './css/base.scss';
import { 
  loginBtn, 
  loginForm, 
  makeNewBookingBtn, 
  managerDashboard, 
  userDashboard, 
  userName, 
  userPassword, 
  usersInfoPage,
  roomSearch,
  pastFutureBookings,
  bookingContainer,
  userBalance,
  roomTypeBtn,
  roomTypeInput,
  roomDateBtn,
  dateInput,
  resultContainer,
  loginErrorMsg,
  backBtn} from './domElements';
import Manager from './classes/Manager';
import DataManager from './classes/DataManager';

 //-----------------------------populate storage-----------------------


const populateStorage = () => {
  const usersURL = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users';
  const roomsURL = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms';
  const bookingsURL = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings';

  getData(usersURL).then(data => localStorage.setItem('users', JSON.stringify(data)))
  getData(roomsURL).then(data => localStorage.setItem('rooms', JSON.stringify(data)))
  getData(bookingsURL).then(data => localStorage.setItem('bookings', JSON.stringify(data)))
}

populateStorage()

//-------------------toggle page view functions-----------

const displayManagerDashboard = () => {
  managerDashboard.classList.remove('hidden')
  loginForm.classList.add('hidden')
}

const displayUserDashboard = () => {
  userDashboard.classList.remove('hidden')
  usersInfoPage.classList.remove('hidden')
  pastFutureBookings.classList.remove('hidden')
  loginForm.classList.add('hidden')
  roomSearch.classList.add('hidden')
}

const makeNewBookingView = () => {
  usersInfoPage.classList.add('hidden')
  pastFutureBookings.classList.add('hidden')
  roomSearch.classList.remove('hidden')
}

//------------------------- login functionality -------------------

const validateLoginInputs = () => {
  const loginPrefix = userName.value.split('').slice(0,8).join('')
  const id = userName.value.split('').slice(8).join('')
  const currentUser = findUser(id)
  if (currentUser && loginPrefix === 'customer' && userPassword.value === 'overlook2020') {
      loginUser(currentUser)
  } else if (userName.value === 'manager' && userPassword.value === 'overlook2020') {
    const manager = new Manager({id: 0, name: 'admin'})
    manager.loggedIn = true
    localStorage.setItem('currentUserID', JSON.stringify(manager.id))
    displayManagerDashboard()
  } else {
    loginErrorMsg.classList.remove('hidden')
  }
}

const findUser = (id) => {
  const users = getUsers()

  return users.find(user => user.id === parseInt(id))
}

const loginUser = (currentUser) => {
  currentUser.loggedIn = true
  localStorage.setItem('currentUserID', JSON.stringify(currentUser.id))
  displayUserDashboard()
  currentUser.getBookedHistory()
  totalBalance(currentUser)
  populateBookings(currentUser)
}


// -----------------------------event listeners---------------------------
loginBtn.addEventListener('click', (event) => {
  event.preventDefault()
  
  validateLoginInputs()
})

makeNewBookingBtn.addEventListener('click', (event) => {
  makeNewBookingView()
})

resultContainer.addEventListener('click', (event) => {
    sendBookingData(event)

    if (event && event.target.id === 'book-room-btn') {
      event.target.disabled = true
    }
})

backBtn.addEventListener('click', (event) => {
  displayUserDashboard()
})
// -----------------------------post request---------------------------

const sendBookingData = (event) => {
  if(event && event.target.id === 'book-room-btn') {
    const userID = JSON.parse(localStorage.getItem('currentUserID'));
    const roomNumber = event.target.dataset.id;
    const date = `${new Date().getUTCFullYear()}/${new Date().getUTCMonth()}/${new Date().getUTCDate()}`;
    const url = "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings";
    const bookingData = {"userID": userID, "roomNumber": roomNumber, "date": date};

    postData(url, bookingData).then(result => {
      if (result) {
        alert("Room succesfully booked!")
      }
    }).catch((error) => alert(error))
  }
}
// -----------------------------inner.HTML---------------------------

const totalBalance = (currentUser) => {
  const cost = currentUser.calculateRoomCosts()
  userBalance.innerHTML = `<p>You have currently spent $${cost}</p>`
}

const populateBookings = (currentUser) => {
  const rooms = getRooms()
  currentUser.roomsBooked
    .sort((a,b) => new Date(b.date) - new Date(a.date))
    .forEach(bookedRoom => {
      const room = rooms.find(room => room.number === parseInt(bookedRoom.roomNumber))
      let moment;
      if (new Date(bookedRoom.date) > Date.now()){
        moment = 'future';
      } else if (new Date(bookedRoom.date) < Date.now()){
        moment = 'past';
      } else {
        moment = 'present';
      }

      bookingContainer.innerHTML += 
      `
      <div class="booking-record ${moment}"> 
        <p class="room-type">room type: ${room.type}</p>
        <p>Date: ${bookedRoom.date}
        <div class="room-cost">
          <p>$${room.cost}</p>
        </div>
      </div>
      `
    })
}

roomTypeBtn.addEventListener('click', (event) => {
  event.preventDefault()
  resultContainer.classList.remove('hidden')
  const rooms = getRooms()
  const dataManager = new DataManager()
  const filteredRooms = dataManager.filterRooms(roomTypeInput.value, rooms)
  filteredRooms.forEach((filteredRoom) => {
    const hasBidet = filteredRoom.bidet ? 'offers' : 'does not have'
    resultContainer.innerHTML += 
    `
      <section class="result-card"> 
        <div class="type-results">
          <p>One ${filteredRoom.type} with ${filteredRoom.numBeds} ${filteredRoom.bedSize} sized beds. cost-per-night: ${filteredRoom.cost}<p>
          <p>(This room ${hasBidet} a bidet)<p>
        </div>
        <button  id="book-room-btn" data-id=${filteredRoom.number} class="login-btn book-btn"> Book now! </button>
      </section>
    `
  })
})

roomDateBtn.addEventListener('click', (event) => {
  event.preventDefault()
  resultContainer.classList.remove('hidden')
  const rooms = getRooms()
  const bookings = getBookings()
  const dataManager = new DataManager()
  let filteredRooms = dataManager.findAvailableRooms(dateInput.value, rooms, bookings)
  const shortResult = filteredRooms.splice(0,20)
  shortResult.forEach((filteredRoom) => {
    const hasBidet = filteredRoom.bidet ? 'offers' : 'does not have'
    resultContainer.innerHTML += 
    `
      <section class="result-card"> 
        <div class="type-results">
          <p>One ${filteredRoom.type} with ${filteredRoom.numBeds} ${filteredRoom.bedSize} sized beds. cost-per-night: ${filteredRoom.cost}<p>
          <p>(This room ${hasBidet} a bidet)<p>
        </div>
        <button class="login-btn book-btn"> Book now! </button>
      </section>
    `
  })
})


