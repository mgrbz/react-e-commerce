
const initialState = {
  products: [
    {
        id: '111',
        imageName: 'https://flone-react.pages.dev/assets/img/product/accessories/6.jpg',
        productName: 'Kemer',
        newPrice: '3,500 TL',
        oldPrice: '4,000TL',
        cardCount : 1
    },
    {
      id: '112',
      imageName: 'https://flone-react.pages.dev/assets/img/product/accessories/6.jpg',
      productName: 'Cüzdan',
      newPrice: '3,500 TL',
      oldPrice: '4,000TL',
      cardCount : 1
    },
    {
      id: '113',
      imageName: 'https://flone-react.pages.dev/assets/img/product/accessories/6.jpg',
      productName: 'Çanta',
      newPrice: '3,500 TL',
      oldPrice: '4,000TL',
      cardCount : 1
    },
    {
      id: '114',
      imageName: 'https://flone-react.pages.dev/assets/img/product/accessories/6.jpg',
      productName: 'Mont',
      newPrice: '3,500 TL',
      oldPrice: '4,000TL',
      cardCount : 1
    }
  ]
}

const RProduct = (state = initialState, {type, payload}) => {
  // console.log('RCard', type, payload)

  switch (type) {
    case 'hello':
      return state;
    default:
      return state;
  }
}

export default RProduct;