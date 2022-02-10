



export const GetUser = () => {
  console.log('getuser called');
  return{
      type: 'getuser',
      payload: 'getuser'
  }
}

export const GetUsers = () => {
  console.log('getusers called');

  return{
      type: 'getusers',
      payload: 'getusers'
  }
}


