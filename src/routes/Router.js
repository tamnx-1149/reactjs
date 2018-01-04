import React, {Component} from 'react';
import Home from '../view/Home/Home'
import {Route, Switch} from 'react-router-dom';
import CreateItem from '../view/Item/Add';
import ListItem from '../view/Item/index';
import EditItem from '../view/Item/Edit';
import Login from '../view/Auth/login';
import Logout from '../view/Auth/logout';

class Router extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/add' component={CreateItem}/>
                    <Route exact path='/index' component={ListItem}/>
                    <Route exact path='/index/edit/:id' component={EditItem}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/logout' component={Logout}/>
                </Switch>
            </main>
        )
    }
}

export default Router

