import React, {Component}from 'react'

export default class ConstructorClass extends Component {
  constructor()
  {
    super();
    this.state={name:"SKCET", place:"CBT"}
  }
  changeCollege()
  {
    this.setState({name:"Atria"})
  }
  render() {
    return (
      <div>
        <h1>I am studing at {this.state.name} place {this.state.place}</h1>
        <button onClick={this.changeCollege.bind(this)}>Click me</button>
      </div>
    )
  }
}
