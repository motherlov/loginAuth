import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import { useNavigate,Link } from "react-router-dom";

import { TablePagination } from '@mui/material';

export default function Home() {

  const [pg, setpg] = useState(0); 
  const [rpg, setrpg] =useState(5); 
  const handleChangePage =(event, newpage)=> {  setpg(newpage); } 
  const handleChangeRowsPerPage =(event)=> { 
      setrpg(parseInt(event.target.value, 10)); 
      setpg(0); } 


  const navigate = useNavigate();
  const [data,setData] = useState('')
  useEffect(() => {
    fetchData();
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

 const fetchData =() =>{
  axios.get("https://reqres.in/api/users?page=2").then(res=>{
    setData(res.data.data);
    console.log(res.data)
    // setRecord(res.data.data) // search value ta payar jono
  })
  console.log(data)
 }

const handleDelete =()=>{
  axios.delete("https://reqres.in/api/users/2").then(res=>{
    console.log("delete data", res.data)
  })
}


  //  const [record,setRecord]= useState();
  //  const searchFilter=(event)=>{
  //   setRecord(data.filter((item)=>( item.toLowerCase().includes(event.target.value).toLowerCase())))
  //  }

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => { localStorage.removeItem("token"); }} >Logout</button>
      <button onClick={handleDelete}>Delete</button>
      <button><Link to="/user" >Create User</Link></button><br/>
      <button><Link to="/update" >Update data</Link></button>
 {/* <input type="search" id="gsearch" name="gsearch" onChange={searchFilter} placeholder="search"/> */}
     <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First Name</th>
      <th scope="col">Image</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
  
     {/* {record && record.slice(pg * rpg, pg * rpg + rpg).map((obj) => ( */}
   {data && data.slice(pg * rpg, pg * rpg + rpg).map((obj) => (  
  
    <tr>
      <th scope="row"  key={obj.id}>{obj.id}</th>
      <td>{obj.first_name}</td>
      <td>
        <img src ={`https://reqres.in/img/faces/${obj.id}-image.jpg`} width="80" height="80"  /> 
      </td>
      <td>{obj.last_name}</td>
      <td>{obj.email}</td>
      
    </tr>
    ))}
  </tbody>
</table>
<TablePagination 
                rowsPerPageOptions={[3, 5, 25]} 
                component="div"
                count={data.length} 
                rowsPerPage={rpg} 
                page={pg} 
                onPageChange={handleChangePage} 
                onRowsPerPageChange={handleChangeRowsPerPage} 
            /> 
    </div>
  );
}
