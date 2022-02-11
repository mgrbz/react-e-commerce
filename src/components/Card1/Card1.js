import React from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './card1.scss';


const Card1 = (props) => {
  return (
    <div className='card1'>
      <div className='card1-image'>
        <img alt="kemer" src={props.item.imageName} />
      </div>

      <div className='card1-content'>
        <div className='content1'>
          <p className='car1-title'>{props.item.productName}</p>
          <p className='card1-icons'>
            <span onClick={() => props.addToCard(props.item)}><AddShoppingCartIcon fontSize='medium' /></span>
            <span><FavoriteBorderIcon fontSize='medium' /> </span>
            
          </p>
        </div>
        <div className='content2'>
          <p className='price'>
            <span className='new-price'>{props.item.newPrice}</span>
            <span className='old-price'>{props.item.oldPrice}</span>
          </p>
        </div>
      </div>


    </div>
  )
}

export default Card1;
