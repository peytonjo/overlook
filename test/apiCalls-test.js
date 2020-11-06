const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

import { expect } from 'chai'
import { fetchApi } from '../src/apiCalls'

describe('API Request', () => {
  let response;
  let data;
  beforeEach(() => {
    data = ['data']
    response = {
      json: () => {
        return data
      }
    };
  
    chai.spy.on(global, ['fetch'], () => {
      return response
    })
  });

  afterEach(() => {
    chai.spy.restore()
  })

  describe.only('fetchApi', () => {
    it('should exist', () => {
      expect(fetchApi).to.be.a('function')
    })
  
    it('should call fetch with the correct url', async () => {
      let url = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users';
  
      await fetchApi(url);
  
      expect(global.fetch).to.have.been.called.with(url);
    });
  
    it('should return data on success', async () => {
      let url = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users';
      
      const returnedData = await fetchApi(url)
      
      expect(returnedData).to.equal(data)
    });
  })
})
