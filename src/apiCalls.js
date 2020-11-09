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
