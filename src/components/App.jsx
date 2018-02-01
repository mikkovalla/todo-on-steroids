import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addReminder } from '../actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ' '
    }
  }

  addReminder() {
    //console.log('state:', this)
    this.props.addReminder(this.state.text)

  }

  renderReminders() {
    const { reminders } = this.props
    //console.log(reminders)
    return (
      <ul className='list-group col-sm-4'>
        {
          reminders.map( reminder => 
          <li key={reminder.id} className="list-group-item">
            <div>{reminder.text}</div>
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
          </div>
          <button type="button" className="btn btn-success" onClick={() => this.addReminder()}>
          New todo
          </button>
        </div>
        {this.renderReminders()}
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
  return bindActionCreators({addReminder}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App)