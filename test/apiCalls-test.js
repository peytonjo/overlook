// const chai = require('chai');
// const spies = require('chai-spies');
// chai.use(spies);


// import { expect } from 'chai'
// import { getData, postData } from '../src/apiCalls'

// describe('API Request', () => {
//   let response;
//   let data;
//   beforeEach(() => {
//     data = ['data']
//     response = {
//       json: () => {
//         return data
//       }
//     };
  
//     chai.spy.on(global, ['fetch'], () => {
//       return response
//     })
//   });

//   afterEach(() => {
//     chai.spy.restore()
//   })

//   describe.only('getData', () => {
//     it('should exist', () => {
//       expect(getData).to.be.a('function')
//     })
  
//     it('should call fetch with the correct url', async () => {
//       const url = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users';
  
//       await getData(url);
  
//       expect(global.fetch).to.have.been.called.with(url);
//     });
  
//     it('should return data', async () => {
//       const url = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users';

//       const returnedData = await getData(url)
      
//       expect(returnedData).to.equal(data)
//     });
//   })

//   describe('postData', () => {
//     it('should exist', () => {
//       expect(postData).to.be.a('function')
//     })

//     it('should call fetch with the correct url and parameters', async () => {
//       const url = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings';
//       const sentData = {stuff: 'data'}
//       const parameters = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(sentData)
//       }
//       await postData(url, sentData);
  
//       expect(global.fetch).to.have.been.called.with(url, parameters)
//     });

//     it('should return data', async () => {
//       const url = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings';
//       const sentData = {stuff: 'data'}

//       const returnedData = await postData(url, sentData)
      
//       expect(returnedData).to.equal(data)
//     });
//   })
// })
