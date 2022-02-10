
const initialState = {
  users: [
    {
      name: 'Mami',
      surname: 'Grbz'
    },
    {
      name: 'Muhammet',
      surname: 'Gürbüz'
    },
    {
      name: 'Gürbüz',
      surname: 'Grbz'
    }
  ]
};

const RUser = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'getuser':
      console.log('rUser payload: ', payload);
      return state;
    case 'getusers':
      console.log('rUser payload: ', payload);
      return state;
    default:
      return state;
  }
};

export default RUser;
