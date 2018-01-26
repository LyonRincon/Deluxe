import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar-simple';
import PropTypes from 'prop-types';

class CalendarContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        };
        this.selectDate = this.selectDate.bind(this);
    }
    
    selectDate(date) {
        var date = date.getFullYear() + '-' + date.getMonth()+1 + '-' + date.getDate()
        this.props.props.selectDate(date);
    }

    render(){
        return (
            <div>
                <Calendar 
                    focusOnDate={new Date()} 
                    onDateSelection={(date)=>{this.selectDate(date)}}
                />
            </div>
        );
    };
}

export default CalendarContainer