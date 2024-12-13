import React, { useState } from 'react'

  const Login = ({handleLogin}) => {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const SubmitHandler=(e)=>{
    e.preventDefault();
    handleLogin(email,password);
  setemail('');
  setpassword('');
  
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 px-10 py-40 rounded-xl'>
      
      <form className='flex flex-col items-center justify-center '>
        <input className='border-2 bg-emerald-950 border-emerald-600 rounded-full py-4 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400 mt-3' type='email' placeholder='Enter your E-mail' required value={email} onChange={(e)=>{
          setemail(e.target.value);
          
        }}></input>
        <input onChange={(e)=>{
          setpassword(e.target.value);
          
        }}className='border-2  bg-emerald-950 border-emerald-600 rounded-full py-4 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400 mt-3' type='password' placeholder='Enter Your Password' value={password}></input>
        <button onClick={(e)=>{
          SubmitHandler(e);
        }} className='border-2 border-emerald-800 rounded-full py-4 px-9 text-xl text-white outline-none bg-emerald-800 placeholder:text-gray-400 mt-3 hover:bg-blue-900'>Login</button>
      </form>
      </div>
      
    </div>
  )
}

export default Login
