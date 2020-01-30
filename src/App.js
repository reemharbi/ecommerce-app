import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninSignup from './pages/signin-signup/signin-signup.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();

        this.state = { currentUser: null };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        // Open Subscriber:
        // It's an open messaging system between our application
        // and our firebase app.
        // Whenever any changes occur on firebase form any source
        // related to this application, firebase sends out a message
        // that says that the auth state has changed, the user has updated.
        // Then it will give us this user and it will call it.
        // This way we don't have to manually fetch every time to
        // check if that status has changed.
        // This connection is always open as long as our application
        // component is mounted on our DOM.
        // but because it's an open subscription we want to
        // close it so we don't have memory leaks in our app.
        auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
            console.log(user);
        });
    }

    componentWillUnmount() {
        // close the open subscription.
        this.unsubscribeFromAuth();
    }

    render() {
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
}

export default App;
