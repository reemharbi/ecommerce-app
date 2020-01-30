import React from 'react';
import Homepage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';
import './App.css';

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
            </Switch>
        </div>
    );
}

export default App;
