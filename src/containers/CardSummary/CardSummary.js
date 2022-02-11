import React from 'react'
import { connect } from 'react-redux';

import { AddToCard, GetCard, GetCards, DeleteToCard, DeleteToCards } from '../../actions';
import './cardsummary.scss';

const CardSummary = (props) => {

  console.log('cardSummary', props);
  return (
    <div>
      
      CardSummary

    </div>
  )
}


const mapStateToProps = ({RCard}) => {
  return{
    RCard
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
