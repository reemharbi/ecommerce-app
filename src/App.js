import React from 'react';
import Homepage from './components/pages/homepage.component';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const Hatspage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
    return (
        <div>
          {/* Switch matches slash first then it will not render
          anything else after it. Benefit: gives you more control */}
          {/* Exact will find the exact match of the url 
          and render it */}
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/shop/hats' component={Hatspage} />
            </Switch>
        </div>
    );
}

export default App;
