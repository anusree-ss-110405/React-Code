import React,{useEffect, useState} from 'react'

export default function AxiosGet1() {
    const [p,setP]=useState([])
    useEffect(()=>{
        axios.get("")
        .then(res=>{
            const store=res.data;
            setP(store)
        })

    })
  return (
    <div>
      
    </div>
  )
}
