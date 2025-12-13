import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email,sete]=useState("")
   const navigate=useNavigate();

    const handleLogin=()=>{
      localStorage.setItem("email",email);
      navigate("/");
    }
  return (
    <div>Login

<br></br>
<br></br>
<br></br>
<br></br>
<form>
<label>Email:</label>
&nbsp;<input type="email" placeholder="enter pannu da punda" onChange={(e)=>sete(e.target.value)}></input><br></br>
&nbsp;<button onClick={handleLogin}>Submit</button>
</form>
<br></br>
<br></br>
<br></br>









    </div>
  )
}
