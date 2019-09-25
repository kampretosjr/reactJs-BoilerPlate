import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from '../screen/home';
import Detail from '../screen/detail';
import store from '../redux/store';

// const dataStorage = JSON.parse(localStorage.getItem("data"))  || ""

export class Routing extends Component {
   

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Detail' component={Detail} />
                    </>
                </Router>
            </Provider>
        );
    }
}

export default Routing;
