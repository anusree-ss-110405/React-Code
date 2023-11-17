import React from 'react'

export default function Name({studentName}) {
    if(studentName==="Harish")
    {
        throw new Error("Harish name is not acceptable");
    }
  return (
    <div>My name is {studentName}</div>
  )
}
