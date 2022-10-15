import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Surname: {this.props.surname}</li>
          <li>Job: {this.props.Job}</li>
          <li>Pay: {this.props.salary}</li>
        </ul>
      </div>


      </div>
    )
  }
}

export default User;