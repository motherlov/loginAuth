import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 const token = localStorage.getItem("token");
 console.log(token)
  const handleSubmit = (e) => {
    console.log(email, password);
    e.preventDefault();
    axios.post("https://reqres.in/api/login", {
        email: email,
        password: password,
      },
      {
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
      )
      .then((res) => {
        navigate("/dashboard");
        console.log(res.data);
        console.log(res);
        // localStorage.setItem('token',res.data.token)  // localstorage token save
        // alert("Login Successfully Done")
      })
      .catch((err) => {
        console.log(err);
        alert("Something error");
      });
  };
  return (
    <div>
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Email</p>
          <input
            required={true}
            value={email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            required={true}
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Log in
          </button>
        </div>
        <Link to="/register">sign up</Link>
      </form>
    </div>
  );
}
