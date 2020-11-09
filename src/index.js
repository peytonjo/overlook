// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import { getData } from './apiCalls';
import './css/base.scss';
import './Room'
import './User'
import './domObject'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// import User from './User';



loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const username = userName.value;
    const password = userPassword.value;
    console.log(loginForm)
    const userID = user.id

    if (username === `customer${userID}` && password === "overlook2020") {
        alert("You have successfully logged in!");
    } else {
        loginErrorMsg.remove('.hidden')
    }
})






// loginBtn.addEventListener('click', () => {
//   if(){

//   }
// })


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

// function changePageView(elements) {
//   elements.forEach(element => {
//     if (element.addHidden) {
//       (element.name).classList.add('hidden');
//     } else {
//       (element.name).classList.remove('hidden');
//     }
//   })
// }
