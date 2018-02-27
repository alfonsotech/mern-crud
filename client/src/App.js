import React, { Component } from 'react';
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

handleChange = event => {
  console.log('this.state inside handleChange:', this.state)
  const { name, value } = event.target
    this.setState({
      [name]: value
    });
}

handleSubmit = event => {
    event.preventDefault()
    const { firstName, lastName, email } = this.state;
    axios.post('/api/users', { firstName, lastName, email })
          .then((data) => {
            console.log('form submitted, the following user was added:', data)
          });
  };

  render() {
    const {firstName, lastName, email} = this.state

    return (
      <div className="App">
        <h1>User Creation Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='firstName'  placeholder='firstName' value={this.state.firstName} onChange={this.handleChange}></input>
          <br />
          <input type='text' name='lastName' placeholder='lastName' value={this.state.lastName} onChange={this.handleChange}></input>
          <br />
          <input type='text' name='email' placeholder='email' value={this.state.email}  onChange={this.handleChange}></input>
          <br />
          <button type='submit' >Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
