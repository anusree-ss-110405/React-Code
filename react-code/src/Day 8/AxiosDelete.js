//DeleteAxios.js
import React, {useEffect,useState} from 'react'
import axios from 'axios'

export default function DeleteAxios() {
    const[id,setId]=useState("");
    const handleDelId=(event)=>{setId(event.target.value)}
    const handleSubmit=event=>{
	event.preventDefault();
	axios.delete('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res.data)
        })
	.catch(error=>{console.log("something went wrong "+error)})
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
		<input type="text" value={id} onChange={handleDelId}></input>
		<button type="submit" >Delete</button>
	</form>
    </div>
  )
}