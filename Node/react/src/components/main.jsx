import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import MainContainer from './mainContainer.jsx';

class Main extends Component {
    render() {
        return (
            <MainContainer props={this.props} />
        );
    }
}

const mapStateToProps = state => ({ content: state.mainReducer });
  
export default connect(mapStateToProps, actions)(Main);
