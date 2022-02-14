import React, { useEffect, useState } from 'react'


import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import './header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



const Header = (props) => {
  // console.log('header props', props);

  let cardCount = 0;
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  const ChangeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  
  var ss = props.cards.length > 0 ? props.cards.map(card => cardCount += card.cardCount ) : 0;
  

  return (
    <div className='header'>
      <div className='header-wrapper'>
        <div className='left-item'>
        <Link to='/'>
          <AllInclusiveIcon fontSize='large' />
        </Link>
        </div>
        <div>
          <h4>React E-Commerce</h4>
        </div>
        <div className='right-item'>
          <Link to='/account'>
            <AccountCircleOutlinedIcon fontSize='small' />
          </Link>
          <Link to='/card'>
            <p className='icon-header'>
              <span className={` ${props.cards.length === 0 ? 'd-none' : ''} card-item-count`}>
                {
                  props.cards.length > 0 ? cardCount : ''
                }
              </span>
              <span>
                <ShoppingCartOutlinedIcon fontSize='small' />
              </span>
            </p>
          </Link>
          <span onClick={() => ChangeTheme()}>
            {
              theme === 'light' ? 
                <Brightness4Icon fontSize='small' /> :
                <WbSunnyIcon fontSize='small' /> 
            }
          </span>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = ({ RCard }) => {
  return{
    cards: RCard.card
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);