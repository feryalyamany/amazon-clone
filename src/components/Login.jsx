import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../imgs/login-logo.png';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
const Login = () => {
 
  const navigate= useNavigate();
  const [mail, setMail]= useState('');
  const [password, setPassword]= useState('');
  const register=(e)=>{
  e.preventDefault();
  createUserWithEmailAndPassword(auth, mail, password)
  .then((auth)=>{
    if(auth){
      navigate('/')
    }
  }).catch((error)=>{
    alert(error.message)
  })
  
  }
  const login=(e)=>{
  e.preventDefault();
  signInWithEmailAndPassword(auth, mail, password)
  .then((auth)=>{
    if(auth){
      navigate('/')
    }
  }).catch((error)=>{
    alert(error.message)
  })
  
  }
  
  return (
  <>
  <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <div className=''>

      <div className="text-center">
      <Link to="/" >
      <img src={logo} style={{width:"83px"}}/>
     </Link>
      </div>
    
  
    
  
  <div className='card p-3 mt-4'>
    <h3>Sign In</h3>

    <form>
      <h6 className='mt-3'>E-mail</h6>
      <input className='px-2 py-1' type="email" placeholder='Enter valid E-mail' value={mail} onChange={(e)=>setMail(e.target.value)} />
      <h6 className='mt-3'>Password</h6>
      <input className='px-2 py-1' type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <div>
      <button className='btn w-100 my-3 login-btn' type='submit' onClick={login}>
        Sign In
      </button>
      <p>By continuing, You agree to Amazon's fake clone conditions of use and privacy notice.</p>
      <button className='btn w-100 py-1 register-btn mb-2' type='submit' onClick={register}>Create Amazon Account</button>
      </div>
     
    </form>

  </div>
    </div>
   
 

  </div>
  </>
  )
}

export default Login