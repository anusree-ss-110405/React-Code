import React, {Component} from "react";
import EnComponent from "./EnComponent";
class ClickCounter extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.inc}>Click me{this.props.count}</button>
            </div>
            
        )
    }
}
export default EnComponent(ClickCounter);