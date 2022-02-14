
const initialState = {
  products: [
    {
        id: '111',
        imageName: 'https://flone-react.pages.dev/assets/img/product/accessories/6.jpg',
        productName: 'Kemer',
        newPrice: 3500,
        oldPrice: 4000,
        cardCount : 1,
        isChecked :false,
        deliveryTime :'2 gün içerisinde kartgoya verilecek!',
        sellShop: 'Gürbüz mağazacılık'
    },
    {
      id: '112',
      imageName: 'https://flone-react.pages.dev/assets/img/product/accessories/6.jpg',
      productName: 'Cüzdan',
      newPrice: 3500,
      oldPrice: 4000,
      cardCount : 1,
      isChecked :false,
      deliveryTime :'2 gün içerisinde kartgoya verilecek!',
      sellShop: 'Gürbüz mağazacılık'
    },
    {
      id: '113',
      imageName: 'https://flone-react.pages.dev/assets/img/product/accessories/6.jpg',
      productName: 'Çanta',
      newPrice: 3500,
      oldPrice: 4000,
      cardCount : 1,
      isChecked :false,
      deliveryTime :'2 gün içerisinde kartgoya verilecek!',
      sellShop: 'Gürbüz mağazacılık'
    },
    {
      id: '114',
      imageName: 'https://flone-react.pages.dev/assets/img/product/accessories/6.jpg',
      productName: 'Mont',
      newPrice: 3500,
      oldPrice: 4000,
      cardCount : 1,
      isChecked :false,
      deliveryTime :'2 gün içerisinde kartgoya verilecek!',
      sellShop: 'Gürbüz mağazacılık'
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