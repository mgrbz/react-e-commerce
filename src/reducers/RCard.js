import CardConstants from "../constants/CCard";

const initialState = {
  card: [ ]
}

const RProduct = (state = initialState, {type, payload}) => {
  console.log('RCard', type, payload);
  switch (type) {
    case CardConstants.ADD_TO_CARD:

      return { ...state, card: state.card.length >0 && state.card.find(item => item.id === payload.id) 
        ? state.card.map(cardItem => cardItem.id === payload.id ? { ...cardItem, cardCount: cardItem.cardCount +1 } : cardItem) 
        : [...state.card, payload] };
    
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
    
    case CardConstants.GET_TO_CARD:
      return state;
    default:
      return state;
  }
}

export default RProduct;