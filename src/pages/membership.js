import React from 'react';
import Login from '../features/membership/login';
import Register from '../features/membership/register';

export default  function Membership () {
  return (
    <div className="container">
        <h4>Membership Site</h4>
        <Login />

        or 

        <Register />
    </div>
  )
}