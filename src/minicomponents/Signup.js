import React from 'react';
import '../css/Login.css';
import {useState} from 'react';
import Navbar from '../components/Navbar.js';

import Footer from  '../components/Footer.js';

const Login=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [tel,setTel]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(email==='user@gmail.com' && password==='password123'){
            alert('Login Successful');
        }else{
            setError('Email or password not correct');
        }
    }
    
    return(
        <div>
            <Navbar />
            <p>Login Form</p>
            <div>
            
            <form className="login-form" onSubmit={handleSubmit} method='post'>
            <label>Name</label>
            <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)} required/>
                <label>Email</label>
                <input type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} required/>
                <label>Telephone No</label>
                <input type="tel" value={tel} name="tel" pattern="[0-9]{10}" onChange={(e)=>setEmail(e.target.value)} required/>
                <label>Password</label>
                <input type="password" value={password} name="password" onChange={(e)=>setPassword(e.target.value)}required/>
                
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>

            </form>
            </div>
            

            <Footer />
        </div>
    );
}
export default Login;