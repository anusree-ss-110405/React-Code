import React, { Component } from 'react'

export default class GreetingComponent extends Component {
    render() {
      return <h1>Welcome to {this.props.college}</h1>;
    }
  }
  GreetingComponent.defaultProps={
      college:"SKCET"
  }