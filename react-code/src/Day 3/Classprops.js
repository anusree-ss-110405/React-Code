import React, { Component } from 'react'

/*export default class Classprops extends Component {
  render() {
    return (
      <div><h1>Hello , this is {this.props.name}</h1></div>
    )
  }
}*/
//state
export default class Classprops extends Component {
    state={name:"SKCET", place:"CBE"}
    //changeCollege=()=>{this.setState({name:"Atria"})}
    //<button onClick={this.changeCollege}>Click me</button>
    render() {
      return (
        <div>
          <h1>I am studing at {this.state.name} place {this.state.place}</h1>
          <button onClick={()=>{this.setState({name:"Atria"})}}>Click me</button>
        </div>
      )
    }
}