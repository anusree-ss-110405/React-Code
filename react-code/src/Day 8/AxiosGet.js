import React, { useEffect, useState } from 'react'
import axios from 'axios';
const AxiosGet = () => {
    const[name,setName]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:30/user`)
        .then(res=>{
            const value=res.data;
            setName(value);
        })
    })
  return (
    <div>
        <ul>
            {
                name.map((names)=><li key={names.id}>{names.name}</li>)
            }
        </ul>
    </div>
  )
}

export default AxiosGet;
