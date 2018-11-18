import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import DashBoard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import SignIn from './components/auth/Signin';
import SignUp from './components/auth/Signup';
import CreateProject from './components/project/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path='/project/:id' component={ProjectDetails}></Route>
            <Route path='/signin' component={SignIn}></Route>
            <Route path='/signup' component={SignUp}></Route>
            <Route path='/createproject' component={CreateProject}></Route>
            <Route path='/' component={DashBoard}></Route>
          </Switch>
          {/* <DashBoard></DashBoard> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
