import React from 'react'
import { connect } from 'react-redux';

import { AddToCard, GetCard, GetCards, DeleteToCard, DeleteToCards } from '../../actions';
import './cardsummary.scss';

const CardSummary = (props) => {

  console.log('cardSummary', props);

  const orderChangeChecked = () => { 
    
    console.log('The checkbox was toggled'); 
    
  }; 

  return (
    <div className='card-summary'>
      
      <div className='my-orders'>
        {
          props.orders != null && props.orders.length >0 ? props.orders.map(order => {
            return(
              <div className='order'>
                <div className='order-checkbox'>
                  <input type="checkbox" onChange={orderChangeChecked} />
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
                  <div className='centerly-count-content decrease-order'>-</div>
                  <div className='centerly-count-content order-count'>{order.cardCount}</div>
                  <div className='centerly-count-content increase-order'>+</div>
                </div>

                <div className='order-price-content'>
                  <span className='new-price'>{order.newPrice}</span>
                  <span className='old-price'>{order.oldPrice}</span>
                </div>

              </div>
            )
          })
          : <div />
        }

      </div>

      <div className='order-confirm'>
        <h2>Sipariş Özeti</h2>
        <div className='confirm-item'>
          <p>Ürünün Toplamı</p><p>2,344 TL</p>
        </div>
        <div className='confirm-item'>
          <p>Ürünün Toplamı</p><p>2,344 TL</p>
        </div>
        <div className='confirm-item'>
          <p>Ürünün Toplamı</p><p className='c-three'>2,344 TL</p>
        </div>
        <div className='confirm-item'>
          <p>Ürünün Toplamı</p><p className='c-three'>2,344 TL</p>
        </div>
      </div>

    </div>
  )
}


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
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSummary);
