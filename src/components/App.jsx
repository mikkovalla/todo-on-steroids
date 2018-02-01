import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addReminder, deleteReminder, clearReminders } from '../actions'
import moment from 'moment'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ' ',
      dueDate: ''
    }
  }

  addReminder() {
    //console.log('state:', this)
    console.log("due date: ", this.state.dueDate)
    this.props.addReminder(this.state.text, this.state.dueDate)
  }

  deleteReminder (id) {
    console.log('delete action', id)
    console.log('props', this.props)
    this.props.deleteReminder(id)
  }

  renderReminders() {
    const { reminders } = this.props
    //console.log(reminders)
    return (
      <ul className='list-group col-sm-4'>
        {
          reminders.map( reminder => 
          <li 
          key={reminder.id} 
          className="list-group-item"
          >
            <div className="list-item">
              <div>{reminder.text}</div>
              <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
            </div>
            <div 
            className="list-item delete-button"
            onClick={() => this.deleteReminder(reminder.id)}
            >
            &#x2715;
            </div>
          </li>
          )
        }
      </ul>
    )
  }
  render () {
    console.log('this.props', this.props)
    return (
      <div className="App">
        <div className="title">
        Todo on Steroids
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input className="form-control" placeholder="I have to..." onChange={event => this.setState({text: event.target.value})}/>
            <input className="form-control" type="datetime-local" onChange={event => this.setState({dueDate: event.target.value})}/>
          </div>
          <button type="button" className="btn btn-success" onClick={() => this.addReminder()}>
          New todo
          </button>
        </div>
        {this.renderReminders()}
        <div className="btn btn-danger"
            onClick={() => this.props.clearReminders()}>
            All done!
        </div>    
      </div>
    )
  }
}

function mapStateToProps(state) {
  //console.log('this.state', state)
  return {
    reminders: state
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder, deleteReminder, clearReminders}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)