
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducers/index';
import Main from './src/components/main.jsx';

const store = createStore(
    rootReducer,
);

render(
    <Provider store={store}><Main /></Provider>,
    document.getElementById('calendarContainer')
);