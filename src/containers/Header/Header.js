import React, { useState } from 'react'


import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {

  const [theme, setTheme] = useState('light');

  const ChangeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='header'>
      <div className='header-wrapper'>
        <div className='left-item'>
          <AllInclusiveIcon fontSize='large' />
        </div>
        <div>
          <h4>React E-Commerce</h4>
        </div>
        <div className='right-item'>
          <Link to='/account'>
            <AccountCircleOutlinedIcon fontSize='small' />
          </Link>
          <Link to='/card'>
            <ShoppingCartOutlinedIcon fontSize='small' />
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


export default Header;