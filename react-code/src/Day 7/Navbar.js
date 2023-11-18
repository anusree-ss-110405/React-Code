import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
export default function Navbar() {

  const navigate = useNavigate();
  const handleHome = ()=>{navigate("/home")}
  const handleAbout = ()=>{navigate("/about")}
  return (
    <div>
      <ul>
        <li onClick={handleHome}>HomeUsingNav</li>
      </ul>
    </div>
  )
}
