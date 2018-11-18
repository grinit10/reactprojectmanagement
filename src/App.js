import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import DashBoard from './components/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path='' component={DashBoard}></Route>
          </Switch>
          {/* <DashBoard></DashBoard> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
