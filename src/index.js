// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

//import './images/hotel-room.webp'
import { getUsers, getRooms, getBookings } from './apiCalls';
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
  roomSearch} from './domElements';
import Manager from './classes/Manager';


 //-----------------------------populate storage-----------------------

const populateStorage = () => {
  getUsers().then(data => localStorage.setItem('users', JSON.stringify(data)))
  getRooms().then(data => localStorage.setItem('rooms', JSON.stringify(data)))
  getBookings().then(data => localStorage.setItem('bookings', JSON.stringify(data)))
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
  loginForm.classList.add('hidden')
}

const makeNewBookingView = () => {
  usersInfoPage.classList.add('hidden')
  roomSearch.classList.remove('hidden')
}

//------------------------- login functionality -------------------

const validateLoginInputs = () => {
  if (userName.value === 'manager' && userPassword.value === 'overlook2020') {
    const manager = new Manager({id: 0, name: 'admin'})
    manager.loggedIn = true
    localStorage.setItem('currentUser', JSON.stringify(manager))
    displayManagerDashboard()
  } else {
    const loginPrefix = userName.value.split('').slice(0,8).join('')
    const id = userName.value.split('').slice(8).join('')
    const matchingUser = findUser(id)
    if (matchingUser && loginPrefix === 'customer' && userPassword.value === 'overlook2020') {
      matchingUser.loggedIn = true
      localStorage.setItem('currentUser', JSON.stringify(matchingUser))
      displayUserDashboard()
    }
  }
}

const findUser = (id) => {
  const usersData = JSON.parse(localStorage.getItem('users'))  

  return usersData.find(user => user.id === parseInt(id))
}


// -----------------------------event listeners---------------------------
loginBtn.addEventListener('click', (event) => {
  event.preventDefault()
  
  validateLoginInputs()
})

makeNewBookingBtn.addEventListener('click', (event) => {
  makeNewBookingView()
})

//inner.HTML


// roomTypeBtn.addEventListener('click', () => {
//   const filteredRoomsType = user.filterRooms(roomTypeInput.type)
//   const result = filteredRoomsType.forEach((filteredRoom) => {
//     displayFilteredRooms.innerHTML = ''
//     return displayFilteredRooms.innerHTML += 
//     `<section class="search-result"> 
//       <div class="type-results">
//         "number": ${room.number},
//         "roomType": ${room.type},
//         "bidet": true
//         "bedSize": ${room.bedSize},
//         "numBeds": ${room.numBeds},
//         "costPerNight": ${room.cost}
//       </div>
//     </section>`
//   })
// })

// roomDateBtn.addEventListener('click', () => {
//   const filteredRoomsDate = user.findAvailableRooms(roomDateInput.date)
//   const result = filteredRoomsDate.forEach((filteredRoom) => {
//     displayFilteredRooms.innerHTML = ''
//     return displayFilteredRooms.innerHTML += 
//     `<section class="search-result">
//       <div class="date-results">
//         "number": ${room.number},
//         "roomType": ${room.type},
//         "bidet": true
//         "bedSize": ${room.bedSize},
//         "numBeds": ${room.numBeds},
//         "costPerNight": ${room.cost}
//       </div>
//      </section>`
//   })
// })


//inner.HTML for the room results when user enters dates 
/* <section class='search-result-card'>
    <div>
      <img class='result_image' src='./images/hotel-exterior.jpg'>
    </div>
    <article class='result_text-wrapper'>
      <h2>${room type}</h2>
      <p>${room summary}</p>
      <p>$145</p>
      <p>per night<br>excluding taxes and fees</p>
    </article>
      <div><p>BOOK</p></div>
   </section>
  */  
