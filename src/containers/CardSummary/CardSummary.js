import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { AddToCard, GetCard, GetCards, DeleteToCard, DeleteToCards, SetCardChecked, IncreaseOrderCount, DecreaseOrderCount, RemoveOrderToCard } from '../../actions';
import './cardsummary.scss';

const CardSummary = (props) => {
  console.log('cardSummary', props);

  const [totalPaymentPrice, setTotalPaymentPrice] = useState(0)
  const [discountedPrice, setDiscountedPrice] = useState(0)
  const [totalDiscount, setTotalDiscount] = useState(0)
  
  useEffect(() => {
    let tpaymentCount = 0;
    let dpaymentCount = 0;
    let totalDiscount = 0;

    let tPP = props.orders.map( order => order.isChecked === true ? tpaymentCount += order.oldPrice * order.cardCount : 0 );
    tPP = props.orders.map( order => order.isChecked === true ? dpaymentCount += order.newPrice * order.cardCount : 0 );
    tPP = props.orders.map( order => order.isChecked === true ? totalDiscount += (order.oldPrice - order.newPrice) * order.cardCount : 0 );
    
    setTotalPaymentPrice(tpaymentCount);
    setDiscountedPrice(dpaymentCount);
    setTotalDiscount(totalDiscount);
  }, [props]);


  const orderChangeChecked = (order) => { 
    props.SetCardChecked(order.id)
    console.log('The checkbox wa toggled', order); 
    
  }; 

  const decreaseOrderCount = (order) => {
    props.DecreaseOrderCount(order.id);
  }
  
  const increaseOrderCount = (order) => {
    props.IncreaseOrderCount(order.id);

  }

  const removeOrderToCard = (order) => {
    props.RemoveOrderToCard(order.id);
    
  }


  return (
    <div className='card-summary'>
      
      <div className='my-orders'>
        {
          props.orders != null && props.orders.length > 0 ? props.orders.map(order => {
            return(
              <div className='order'>
                <div className='order-checkbox'>
                  <input type="checkbox" onChange={() => orderChangeChecked(order)} checked={order.isChecked} />
                </div> 

                <div className='order-image'>
                  <img src={order.imageName} alt={order.imageName} />
                </div>

                <div className='order-info'>
                  <h4>{order.productName}</h4>
                  <p>{order.deliveryTime}</p>
                  <p className='order-sell-shop'>{order.sellShop}</p>
                </div>

                <div className='order-count-content'>
                  <div className='centerly-count-content decrease-order' onClick={() => {decreaseOrderCount(order)}}>-</div>
                  <div className='centerly-count-content order-count' onClick={() => {}}>{order.cardCount}</div>
                  <div className='centerly-count-content increase-order' onClick={() => {increaseOrderCount(order)}}>+</div>
                </div>

                <div className='order-price-content'>
                  <span className='new-price'>{order.newPrice}</span>
                  <span className='old-price'>{order.oldPrice}</span>
                </div>
                <div onClick={() => removeOrderToCard(order)}>
                  <DeleteOutlineIcon fontSize='medium' />
                </div>
              </div>
            )
          })
          : <div />
        }

      </div>

      <div className='order-confirm'>

        <h2 className='order-title'>Sipariş Özeti</h2>

        <div className='orders-item'>

          <div className='confirm-item'>
            <p>Ürünün Toplamı</p><p>{formatter.format(totalPaymentPrice)}</p>
          </div>
          <div className='confirm-item'>
            <p>Kargo Toplam</p><p>2,344 TL</p>
          </div>
          <div className='confirm-item'>
            <p>Sepette %1 İndirim</p><p className='c-three'>2,344 TL</p>
          </div>
          <div className='confirm-item'>
            <p>60 Tl ve Üzeri Kargo ...</p><p className='c-three'>2,344 TL</p>
          </div>
        </div>

        <div className='price-summary'>
          <div className='payment-sell'>
            <span className='payment-price-text'>Toplam İndirim</span>
            <span>{formatter.format(totalDiscount)}</span>
          </div>
          <div className='payment-price'>
            {formatter.format(discountedPrice)}
          </div>
        </div>

      </div>


    </div>
  )
}

const formatter = new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
});

const mapStateToProps = ({RCard}) => {
  return{
    orders : RCard.card
  }
}


const mapDispatchToProps = {
  AddToCard,
  GetCards,
  GetCards,
  DeleteToCard,
  DeleteToCards,
  SetCardChecked,
  IncreaseOrderCount,
  DecreaseOrderCount,
  RemoveOrderToCard
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSummary);
