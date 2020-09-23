import React from 'react';

import {
  NavLink
} from 'react-router-dom';


export default function Layout() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-success">
      <NavLink  exact className="navbar-brand" to="/">Home</NavLink>
      <NavLink className="navbar-brand" to="/todo">Todo</NavLink>
      <NavLink className="navbar-brand" to="/usereducer">useReducer Demo</NavLink>
      <NavLink className="navbar-brand" to="/counter">Counter</NavLink>
      <NavLink className="navbar-brand" to="/multple-state">Multiple State Update</NavLink>
      <NavLink className="navbar-brand" to="/multple-state-props">Multiple State Props Update</NavLink>
      <NavLink className="navbar-brand" to="/useeffect">useEffect Demo</NavLink>
    </nav>
  )
}