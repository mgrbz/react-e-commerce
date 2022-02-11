import CardConstants from "../constants/CCard";

const initialState = {
  card: [ ]
}

const RProduct = (state = initialState, {type, payload}) => {
  // console.log('RCard', type, payload)
  switch (type) {
    case CardConstants.ADD_TO_CARD:
      return { ...state, card: [...state.card, payload] };
    case CardConstants.GET_TO_CARD:
      return state;
    case CardConstants.DELETE_TO_CARD:
      return state;
    case CardConstants.DELETE_TO_CARDS:
      return state;
    default:
      return state;
  }
}

export default RProduct;