import React from 'react'

function Display()
{
    const paragraphStyle = {
        color: 'black',
        backgroundColor: 'lightblue',
    };
    return (
        <div
        style = {{
          width: "500px",
      }}
        >
        <p style={paragraphStyle}><h1>Nested Component</h1></p>
        </div>
    )
}
export default function NestedComponent() {
  return (
    <div>
      <Display/>
    </div>
  )
}
