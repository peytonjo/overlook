// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import { fetchApi } from './apiCalls';
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import User from './User';

// async function getUsers() {
//   const data = await fetchApi('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
//   const users = data.users.map(user => new User(user))
//   console.log(users)
// }

// getUsers()