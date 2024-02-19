import React from 'react'
import axios from 'axios'
 import { useState } from 'react'
 import { Link } from 'react-router-dom';
export default function Register() {

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit =(e)=>{
    console.log(email , password);
     e.preventDefault();
    axios.post("https://reqres.in/api/register",{
        email:email,
        password:password
    }).then(res=>{
        console.log(res.data);
         localStorage.setItem("token",res.data.token)
        alert("Registration Successfully Done")
    }).catch(err=>{
        console.log(err);
        alert("Something error")
    })
}
  return (
    <div>
        <h1>Signup page</h1>
      
      <form>
        <label>
          <p>Email</p>
          <input value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}} />
        </label>
        <label>
          <p>Password</p>
          <input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </label>
        <div>
          <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </div>
        <Link to="/">log in</Link>
      </form>
    </div>
  )
}
