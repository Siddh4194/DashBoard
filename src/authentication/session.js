const getStatus = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/secret`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(response => response.json())
  };
  
  const logOut = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/logout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(response => response.json())
  };
  
  export {logOut, getStatus};