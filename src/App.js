import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninSignup from './pages/signin-signup/signin-signup.component';

function App() {
    return (
        <div>
            {/* Switch matches slash first then it will not render
          anything else after it. Benefit: gives you more control */}
            {/* Exact will find the exact match of the url 
          and render it */}
            <Header />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SigninSignup} />
            </Switch>
        </div>
    );
}

export default App;
