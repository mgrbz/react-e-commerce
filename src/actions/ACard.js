import CardConstants from "../constants/CCard";

export const AddToCard = (item) => {
  // console.log('AddToCard Action called item: ', item);
  return{
      type: CardConstants.ADD_TO_CARD,
      payload: item
  };
};

export const GetCard = (item) => {
  // console.log('getcard called');
  return{
      type: CardConstants.GET_TO_CARD,
      payload: item.id
  };
};

export const GetCards = () => {
  // console.log('getcards called');
  return{
      type: CardConstants.GET_TO_CARD,
      payload: ''
  };
};

export const DeleteToCard = (itemId) => {
  // console.log('DeleteToCard called');
  return{
      type: CardConstants.DELETE_TO_CARD,
      payload: itemId
  };
};

export const DeleteToCards = () => {
  // console.log('DeleteToCards called');
  return{
      type: CardConstants.DELETE_TO_CARDS,
      payload: ''
  };
};


export const SetCardChecked = (orderId) => {
  // console.log('DeleteToCards called');
  return{
      type: CardConstants.SET_CHECKED,
      payload: orderId
  };
};

export const IncreaseOrderCount = (orderId) => {
  return{
      type: CardConstants.INCREASE_ORDER_COUNT,
      payload: orderId
  };
};


export const DecreaseOrderCount = (orderId) => {
  return{
      type: CardConstants.DECREASE_ORDER_COUNT,
      payload: orderId
  };
};


export const RemoveOrderToCard = (orderId) => {
  return{
      type: CardConstants.REMOVE_ORDER_TO_CARD,
      payload: orderId
  };
};





