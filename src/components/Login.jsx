import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmission =(e)=>{
        e.preventDefault();
        setUser({username,password});

    }
  return (
    <>
    <h1>Login</h1>
    <form action="">
        <label htmlFor="username">UserName:</label>
        <input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br />
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />
        <button onClick={handleSubmission}>Submit</button>
    </form>



    </>
  )
}

export default Login