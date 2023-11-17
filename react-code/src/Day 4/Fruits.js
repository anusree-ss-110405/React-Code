import React from 'react'

export default function Lists() {
    const fruits = ["Mango","Orange","Apple"];
    const display = fruits.map(
        (name)=>
        {
            return <li>{name}</li>
        }
    )
  return (
    <div>
      <ul>
        {display}
      </ul>
    </div>
  )
}
