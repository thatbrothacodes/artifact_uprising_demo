import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../Home';
import { InvalidPage } from '../404';
import { Login } from '../Login';
import { Menu } from '../Menu';
import { Orders } from '../Orders';
import { Profile } from '../Profile';

export default function Router() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/menu' component={Menu}/>
            <Route exact path='/orders' component={Orders}/>
            <Route exact path='/profile' component={Profile}/>
            <Route component={InvalidPage}/>
        </Switch>
    )
}