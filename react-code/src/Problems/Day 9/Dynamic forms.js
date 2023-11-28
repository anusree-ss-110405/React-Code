import React, {useState} from 'react'
export default function addform(){
    const [val,setVal]=useState([]);
    const handleadd=()=>{
        const value=[...val,[]];
        setVal(value);
    }

    const handlesubmit=(event,index)=>{
        const input=[...val];

    }
}