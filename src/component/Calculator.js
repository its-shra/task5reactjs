import React, { Component } from 'react';

export class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      age: 0,
      dob: '',
      current: new Date(),
    };
  }

  handleDateChange = (event) => {
    this.setState({ 
        dob: event.target.value 
    });
  };

  calculateAge = () => {
    // const { dob } = this.state;

    if (this.state.dob) {
      const dobDate = new Date(this.state.dob);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - dobDate.getFullYear();
      this.setState({ age });
    }
  };

  render() {
    return (
      <div>
        <h1>Age Calculator</h1>
        <h3>Enter Your Date of Birth</h3>
        <input
          type="date"
          id="dob"
          max={this.state.current.toISOString().split('T')[0]}
          onChange={this.handleDateChange}
        />
        <br />
        <br />
        <button onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age > 0 && (
          <h2>You are {this.state.age} years old</h2>
        )}
      </div>
    );
  }
}
