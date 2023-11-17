import React from 'react'

export default function Defaultprops(props) {
  return (
    <div>
        <h1>My name is {props.name} and i am studying at {props.college}</h1>
    </div>
  )
}
Defaultprops.defaultProps={college:"SKCET"}