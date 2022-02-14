import CardConstants from "../constants/CCard";

const initialState = {
  card: [ ],
  totalPaymentPrice: 0
}

const RProduct = (state = initialState, {type, payload}) => {
  console.log('RCard', type, payload);
  switch (type) {
    case CardConstants.ADD_TO_CARD:

      return { 
        ...state, 
        card: state.card.length >0 && state.card.find(item => item.id === payload.id) 
        ? state.card.map(cardItem => cardItem.id === payload.id ? { ...cardItem, cardCount: cardItem.cardCount +1 } : cardItem) 
        : [...state.card, payload]
      };
    
    case CardConstants.SUBTRACT_TO_CARDS:
      return {
                ...state, 
                card: state.card.map(cardItem => cardItem.id === payload.id 
                        ? { ...cardItem, cardCount: cardItem.cardCount > 1 ? cardItem.cardCount -1 : 1 } 
                        : cardItem
                      ) 
              };
    case CardConstants.DELETE_TO_CARD:
      return {
                ...state, 
                card: state.card.map(cardItem => cardItem.id === payload.id ? null : cardItem ) 
              };
    case CardConstants.DELETE_TO_CARDS:
      return { ...state,  card: [] };
    case CardConstants.SET_CHECKED:
      return {...state, card : state.card.map(item => item.id == payload ? {...item, isChecked: !item.isChecked} : item )};
    case CardConstants.INCREASE_ORDER_COUNT:
      return {...state, card : state.card.map(item => item.id == payload ? {...item, cardCount: item.cardCount + 1} : item )};
    case CardConstants.DECREASE_ORDER_COUNT:
      return {...state, card : state.card.map(item => item.id == payload ? {...item, cardCount: item.cardCount - 1} : item )};
      case CardConstants.REMOVE_ORDER_TO_CARD:
        return {...state, card : state.card.filter(item => item.id !== payload)};
    default:
      return state;
  }
}

export default RProduct;