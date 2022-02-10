import React from 'react'
import { connect } from 'react-redux';

import { GetUser, GetUsers } from './actions';

const App = (props) => {
  console.log('app props:', props );

  const callEvent = () => {
    console.log('eventCalled');
    props.GetUser();
    props.GetUsers();
  }

  return (
    <div>
      App
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
