import React,{useState} from 'react'
import axios from 'axios'
export default function PostAxios() {
    const[name,setName]=useState("")
    const handleChangeName=(event)=>{setName(event.target.value)}
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users',{name})
        .then(res=>{console.log(res.data)})
        .catch(error=>{console.log("something went wrong"+error)})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChangeName}></input>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}