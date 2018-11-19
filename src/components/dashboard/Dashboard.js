import React, {Component} from 'react'
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList';
import {connect} from 'react-redux'

class DashBoard extends Component{
    
    render() {
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={this.props.projects}></ProjectList>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications></Notifications>
                    </div>
                </div>
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(stateToProps)(DashBoard)