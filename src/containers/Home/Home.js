import React from 'react'
import { connect } from 'react-redux';

import { AddToCard, GetCard, GetCards, DeleteToCard, DeleteToCards } from '../../actions';
import Card1 from '../../components/Card1/Card1';

import './home.scss';



const Home = (props) => {
  console.log('home', props);
  
  const addToCard = (item) => {
    props.AddToCard(item)
  }

  

  return (
    <div className='home'>
      
      Home
      <div className='home-product'>
        {
          props.products.map(card => <Card1 item={card} addToCard={() => addToCard(card)} />)
        }
      </div>

    </div>
  )
}

const mapStateToProps = ({ RCard, RProduct }) => {
  return{
    RCard,
    products: RProduct.products
  }
}

const mapDispatchToProps = {
  AddToCard,
  GetCards,
  GetCards,
  DeleteToCard,
  DeleteToCards,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);