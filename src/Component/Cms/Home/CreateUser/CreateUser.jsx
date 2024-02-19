import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
export default function CreateUser() {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

     const handleSubmit =(e)=>{
     e.preventDefault();
    axios.post('https://reqres.in/api/users',{
        name:name,
        job:job
    })

     }
  return (
    <div>
         <h1>Create User</h1>
      
      <form>
        <label>
          <p>Name</p>
          <input value={name} type="text" onChange={(e)=>{setName(e.target.value)}} />
        </label>
        <label>
          <p>Job</p>
          <input type="text"  value={job} onChange={(e)=>{setJob(e.target.value)}}/>
        </label>
        <div>
          <button type="submit" onClick={handleSubmit}>Create User</button>
        </div>
      
      </form>
    </div>
  )
}
