import * as constants from '../constants/constants';
import * as api from '../api/helper';

export function loadInitialData(data) {
    return {
        type: constants.LOAD_INITIAL_DATA,
        payload: data,
    };
}

export function selectDate(date) {
    return {
        type: constants.SELECT_DATE,
        payload: date,
    };
}

export function addTask(taskInfo) {  
    return {
        type: constants.ADD_TASK,
        payload: taskInfo,
    };
}