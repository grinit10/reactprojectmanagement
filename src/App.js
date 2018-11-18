import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import DashBoard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path='/project/:id' component={ProjectDetails}></Route>
            <Route path='/' component={DashBoard}></Route>
          </Switch>
          {/* <DashBoard></DashBoard> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
