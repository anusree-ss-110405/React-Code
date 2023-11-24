import React, { useState } from 'react'

export default function Forms() {
    const Handlesubmit=(event)=>{
        const [firstname,setFirstname]=useState('');
        const [lastname,setLastname]=useState('');
        const[error,setError]=useState(false);
    }
  return (
    <div>
      <form onSubmit={Handlesubmit}>
        <label>Enter the first name:&nbsp;</label>
        <input type='text' value={firstname} onChange={(event)=>setFirstname}/>







































































































        
      </form>
    </div>
  )
}
