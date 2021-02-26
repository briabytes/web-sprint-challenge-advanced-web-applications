import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {
  const [login, setLogin] = useState({username: '', password:''});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login', login)
    .then((res) => {
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubblePage')
    })
    .catch((err) => {
      setError(err.message);
      console.log(err.message);
    })
  }
  
  return (
    <>
     <form onSubmit={handleChange}>
     <label htmlFor="name">Name: </label>
        <input 
        required id="name" 
        type="text" 
        onChange={(e) => setLogin({...login, username: e.target.value})}
        />
      <label htmlFor="password">Password: </label>
        <input 
        required id="password" 
        type="text" 
        onChange={(e) => setLogin({...login, password: e.target.value})}/>
        <div className="space__small">{error ? <h3>{error}</h3> : ""}</div>
      <button>Login</button>
     </form>
    </>
  );
};

export default Login;
