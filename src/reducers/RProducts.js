
const initialState = {
  products: [
    {
      name: 'Monitör',
      type: 'teknology'
    },
    {
      name: 'Klavye',
      type: 'teknology'
    },
    {
      name: 'Kulaklık',
      type: 'teknology'
    }
  ]
}

const RProduct = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'hello':
      return state;
    default:
      return state;
  }
}

export default RProduct;