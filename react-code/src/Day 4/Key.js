import React from 'react'

export default function Listss() {
    const display=[
        {id:1,name:"Sachin ",college:"SKCET"},
        {id:2,name:"Sachin ",college:"SKCET"},
    ]
    const show=display.map((items)=>{return <li key={items.id}>{items.name}{items.college}</li>})
  return (
    <ul>
        {show}
    </ul>
  )
}
