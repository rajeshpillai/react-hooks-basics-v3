import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Counter from './components/counter';
import Layout from './pages/layout';
import MultipleStateUpdate from './components/stateupdate-multiple';
import MultipleStatePropsUpdate from './components/state-multiple-props-update';
import UseEffectDemo from './components/useeffect-demo';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Layout />
       
        <div className="content">
          <Switch>
            <Route path ="/" exact>
               <h1>Hello React</h1>
            </Route>

            <Route path ="/multple-state">
               <MultipleStateUpdate/>
            </Route>

            <Route path ="/multple-state-props">
               <MultipleStatePropsUpdate/>
            </Route>
            
            <Route path ="/useeffect">
               <UseEffectDemo />
            </Route>

            <Route path="/counter">
                <Counter />
            </Route>
          </Switch>  
        </div>          
      </Router>
    </div>
  );
}

export default App;


