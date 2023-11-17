import React, {Component} from 'react'

export default class ComponentDid extends Component{
  state={color:"Yellow"}
  shouldComponentUpdate(){
    //return false;
    return true;
  }
  getSnapshotBeforeUpdate(preProps,preState)
  {
    document.getElementById("i").innerHTML="Previous Value "+preState.color;
  }
  componentDidMount()
  {
    setTimeout(()=>{this.setState({color:"Blue"})},3000);
  }
  render()
  {
    return(
        <div>
            <h2>{this.state.color}</h2>
            <h2 id="i"></h2>
        </div>
    )
  }
}
