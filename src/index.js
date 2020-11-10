// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import { getData } from './apiCalls';
import './css/base.scss';
import './classes/Room'
import './classes/User'
import './domElements'
import { loginBtn, loginForm, managerDashboard, userDashboard, userName, userPassword } from './domElements';
import User from './classes/User';
import Manager from './manager';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

 //-----------------------------populate storage-----------------------

const getUsers = () => {
  return getData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then((usersData) => {
      return usersData.users.map((data) => {
        return new User(data);
      })
    })
    .catch(error => console.log(error));
}


const populateStorage = () => {
  getUsers().then(data => localStorage.setItem('users', JSON.stringify(data)))
}

populateStorage()

//-------------------toggle page view functions-----------

const displayManagerDashboard = () => {
  managerDashboard.classList.remove('hidden')
  loginForm.classList.add('hidden')
  console.log('currentUser', localStorage.getItem('currentUser'))
}

const displayUserDashboard = () => {
  userDashboard.classList.remove('hidden')
  loginForm.classList.add('hidden')
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

  return usersData.find(user => {
    return user.id === parseInt(id)
  })
}


// -----------------------------event listeners---------------------------
loginBtn.addEventListener('click', (event) => {
  event.preventDefault()
  
  validateLoginInputs()
})


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

