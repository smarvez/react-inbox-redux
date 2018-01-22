import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../actions'
const api = 'http://localhost:8082/api/messages'


class MessageList extends Component {


  componentWillMount() {
    console.log('actions', actions);
    this.props.dispatch(actions.fetchMessages)
  }

  render() {
    return (
      <div>MessageList</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messageList: state.messageList
  }
}

export default connect(
  mapStateToProps
)(MessageList)
