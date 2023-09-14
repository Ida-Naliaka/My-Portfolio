import { useState } from "react";
import axios from 'axios';
import Home from "./home";

const Login = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail]= useState('');
  const [semail, setSemail]= useState('');
  const [password, setPassword]= useState('');
  const [spassword, setSpassword]= useState('');
  const [show, setShow]= useState(false);
  
  const handleLogin=async(e)=>{
    e.preventDefault();
    try {
      await axios.post('/api/user/login', {email, password}).then ((res)=>{
        setUser(res.data)
      })
    } catch (error) {
      console.log(error);
    }
  }
  const handleSignup=async(e)=>{
    e.preventDefault();
    try {
      await axios.post('/api/user/signup', {email:semail, password:spassword}).then ((res)=>{
        setUser(res.data)
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    {user ? <Home />:
    <div className="container home-page dashboard" style={{ display:"flex", flexDirection:"column" }}>
      <h3> Welcome, Ida. <br/>Sign In </h3>
      <form onSubmit={(e)=>handleLogin(e)} style={{display:"flex", flexDirection:"column"}}>
      <label>Email</label>
        <input
        type='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <div style={{display:"flex"}}>
        <label>Password</label>
        <input
        type={show?'text':'password'}
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={(e)=>{setShow(!show);e.preventDefault()}}>{show?'hide':'show'}</button>
        </div>
        <button type="submit">Log in</button>
      </form>
      <h3>Sign Up</h3>
      <form onSubmit={(e)=>handleSignup(e)} style={{display:"flex", flexDirection:'column'}}>
      <label>Email</label>
        <input
        type='email'
        value={semail}
        onChange={(e)=>setSemail(e.target.value)}/>
        <div style={{display:"flex"}}>
        <label>Password</label>
        <input
        type={show?'text':'password'}
        value={spassword}
        onChange={(e)=>setSpassword(e.target.value)}/>
        <button onClick={(e)=>{setShow(!show); e.preventDefault()}}>{show?'hide':'show'}</button>
        </div>
        <button type="submit">Sign Up</button>
      </form>     
    </div>
}
    </>
  )
}

export default Login
