import React from 'react';
import ReactDOM from 'react-dom';

class TasksList extends React.Component {  
    constructor(props) {
        super(props);
    }

    render(){
        const { selectedDate, calendar } = this.props.props.content;
        let dayTasks = [];
        if (!selectedDate) {
            return <div>Please select a day</div>
        }
        dayTasks = calendar.filter(c => c.date === selectedDate);
        return (
            <div>
                <div style={{color: 'red'}}>Tasks for {selectedDate}:</div>
                {
                    (dayTasks.length > 0) ? (
                        <ul>
                            {                            
                                dayTasks.map((day, index) => (
                                    <li key={day.date + index}>
                                        {day.description}
                                    </li>
                                ))
                            }
                        </ul>
                    ) : (
                        <div style={{paddingTop: 15, paddingLeft: 25, paddingBottom: 15}}>No tasks for today</div>
                    )
                }
            </div>
        );
    };
}

export default TasksList