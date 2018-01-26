import * as constants from '../constants/constants';

const initialState = { 
    calendar: [],
    selectedDate: ''
    /*
    calendar: [
        { date: '2018-01-1', description: 'Task 1 of 2018-1-1' },
        { date: '2018-01-1', description: 'Task 2 of 2018-1-1' },
        { date: '2018-01-4', description: 'Task 1 of 2018-1-4' },
        { date: '2018-01-8', description: 'Task 1 of 2018-1-8' },
        { date: '2018-01-10', description: 'Task 1 of 2018-1-10' },
        { date: '2018-01-10', description: 'Task 2 of 2018-1-10' }
    ],
    selectedDate: ''
    */
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case constants.LOAD_INITIAL_DATA:
        return Object.assign({}, state, {
            calendar: action.payload
        });
    case constants.SELECT_DATE:
        return Object.assign({}, state, {
            selectedDate: action.payload
        });
    case constants.ADD_TASK:
        state.calendar.push(action.payload);
        return Object.assign({}, state, {  
            calendar: state.calendar,
        });
    default:
      return state;
  }
}
