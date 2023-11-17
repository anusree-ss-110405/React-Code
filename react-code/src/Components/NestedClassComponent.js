import React, {Component} from 'react'
function Display()
{
    return (
        <div>
            <h2>This is a nested class</h2>
        </div>
    )
}
export default class NestedClassComponent extends Component
{
    render(){
    return (
        <div
        style={{
            width:"500px",
        }}>
          <Display/>
        </div>
      )
    }
}