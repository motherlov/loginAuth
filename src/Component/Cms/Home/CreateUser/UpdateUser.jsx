import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function UpdateUser() {

    const [post, setPost] = useState({ 
        name:'',
        job:''
    });
    const handleSubmit =(e)=>{
        e.preventDefault();
       axios.patch('https://reqres.in/api/users/2',{
        post
    }).then(res=>{
        console.log(res.data)
        alert("Data Update successfully ")
        
       }).catch(err=>{
        console.log(err)
        
      
       })
        }
        const handleInput =(event)=>{
    setPost({...post,[event.target.name]:event.target.value})
        }

  return (
    <div>
          <h1>Update User</h1>
      
      <form>
        <label>
          <p>Name</p>
          <input  type="text" name="name" onChange={handleInput} />
        </label>
        <label>
          <p>Job</p>
          <input type="text" name="job"   onChange={handleInput}/>
        </label>
        <div>
          <button type="submit" onClick={handleSubmit}>Update User Data</button>
        </div>
      
      </form>
    </div>
  )
}
