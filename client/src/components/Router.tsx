import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { InvalidPage } from '../404';
import { Account } from '../Account';
import { Home } from '../Home';
import { Login } from '../Login';
import { Orders } from '../Orders';

export default function Router() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/account' component={Account}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/orders' component={Orders}/>
            <Route component={InvalidPage}/>
        </Switch>
    )
}