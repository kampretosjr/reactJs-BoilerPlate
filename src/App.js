import React, { Component } from 'react';
import Routing from './routes/home';
import Axios from 'axios';

export class App extends Component {
  render() {
    // Axios.defaults.headers.common['authorization'] = 'x-cashier-app'
    return (
      <Routing />
    );
  }
}

export default App;
