import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import CalendarContainer from './calendarContainer.jsx';
import TasksList from './tasksList.jsx';
import AddTask from './addTask.jsx';
import * as api from '../api/helper';

class MainContainer extends Component {
    componentWillMount() {
        const data = api.getInitialData();
        data.then((resp) => {
            this.props.props.loadInitialData(resp);
        });
    }

    render(){
        return (
            <div>
                <CalendarContainer props={this.props.props} />
                <TasksList props={this.props.props} />
                <AddTask props={this.props.props} />
            </div>
        );
    };
}

export default MainContainer