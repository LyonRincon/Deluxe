import React from 'react';
import ReactDOM from 'react-dom';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    addTask() {
        const { selectedDate } = this.props.props.content;
        this.props.props.addTask({ date: selectedDate, description: this.state.value });
        this.setState({ value: '' });
        event.preventDefault();
        event.stopPropagation();
    }

    render(){
        const { selectedDate } = this.props.props.content;
        if (!selectedDate) {
            return null;
        }

        return (
            <div>
                <label>
                    Task:
                    <input style={{marginLeft: 10}} type="text" name="name" onChange={this.handleChange} value={this.state.value}/>
                </label>
                <button disabled={this.state.value === ''} style={{marginLeft: 10}} onClick={this.addTask}>Add task</button>
            </div>
        );
    };
}

export default AddTask