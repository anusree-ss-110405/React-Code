import React, {Component} from 'react'
export default class TwoWay extends Component
{
    state={name:""}
    handleChange=(event)=>{this.setState({name: event.target.value})}
    render()
    {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <input type="text" value={this.name} onChange={this.handleChange}/>
            </div>
        )
    }
}