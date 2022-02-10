import React from 'react'
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GetUser, GetUsers } from './actions';
import Account from './containers/Account/Account';
import CardSummary from './containers/CardSummary';

import Footer from './containers/Footer';
import Header from './containers/Header';
import Home from './containers/Home';

import './index.scss';

const App = (props) => {
  console.log('app props:', props );

  const callEvent = () => {
    console.log('eventCalled');
    props.GetUser();
    props.GetUsers();
  }

  return (
    <div className='app'>
      <BrowserRouter>
        
        <Header />

        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/account' element={<Account />} />
            <Route path='/card' element={<CardSummary />} />
          </Routes>
      
        </div>

        <Footer />

      </BrowserRouter>

      <button onClick={() => callEvent()}>Call Dispatch Event</button>
    </div>
  )
};

const mapStateToProps = ({RUser, RProduct}) => {
  return {
    RUser,
    RProduct
  }
}

const mapDispatchToProps = {
  GetUser,
  GetUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
