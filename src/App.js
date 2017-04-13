import React, {Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Main from './Main';
import Search from './search/Search';

export default class App extends Component {

    render () {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main}>
                    <Route path="/search" component={Search} />
                </Route>
            </Router>
        );
    }
}