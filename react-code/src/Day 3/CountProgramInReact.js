import React, {Component} from 'react'
export default class CountProgram extends Component
{
    constructor()
    {
        super();
        this.state={count:0}
    }
    IncreaseCount=()=>{
        this.setState({count:this.state.count+1});
    }
    render()
    {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                {/*<button onClick={this.IncreaseCount}>Increment</button>*/}
                <button onMouseOver={this.IncreaseCount}>Increment</button>
            </div>
        )
    }
}