// import React from 'react';
// import '../css/Login.css';
// import {useState} from 'react';
// import Navbar from '../components/Navbar.js';

// import Footer from  '../components/Footer.js';

// const Login=()=>{
//     const [email,setEmail]=useState('');
//     const [password,setPassword]=useState('');
//     const [error,setError]=useState('');
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         if(email==='user@gmail.com' && password==='password123'){
//             alert('Login Successful');
//         }else{
//             setError('Email or password not correct');
//         }
//     }
    
//     return(
//         <div>
//             <Navbar />
            
//             <div className="container">
//             <p>Login Form</p>
            
//             <form  onSubmit={handleSubmit} method='post'>
//                 <label>Email</label>
//                 <input type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} required/>
//                 <label>Password</label>
//                 <input type="password" value={password} name="password" onChange={(e)=>setPassword(e.target.value)}required/>
                
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <button type="submit">Login</button>

//             </form>
//             </div>
            

//             <Footer />
//         </div>
//     );
// }
// export default Login;
//==========================================

// import React from 'react';
//  import '../css/Login.css';
// import {useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setEmail, setPassword, resetForm } from './authSlice';
// import Navbar from '../components/Navbar.js';
// import Footer from  '../components/Footer.js';

// const Login=()=>{
//     const [error,setError]=useState('');
//     const {email,password}=useSelector((state)=>state.form);
//     const dispatch=useDispatch();

//     dispatch(resetForm());
    
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//          if(email==='user@gmail.com' && password==='12345'){
//             alert('Login Successful');
//         }else{
//             setError('Email or password not correct');
//         }
//     }

    
//    return(
//         <div>
//             <Navbar />
            
//             <div className="container">
//             <p>Login Form</p>
            
//             <form  onSubmit={handleSubmit} method='post'>
//                 <label>Email</label>
//                 <input type="email" value={email} name="email" onChange={(e) => dispatch(setEmail(e.target.value))} required/>
//                 <label>Password</label>
//                 <input type="password" value={password} name="password" onChange={(e) => dispatch(setPassword(e.target.value))} required/>
                
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <button type="submit">Login</button>

//             </form>
//             </div>
            

//             <Footer />
//         </div>
//     );
// }
// export default Login;

//============================================
// import React from 'react';
//  import '../css/Login.css';
// import {useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setEmail, setPassword, resetForm } from './authSlice';
// import Navbar from '../components/Navbar.js';
// import Footer from  '../components/Footer.js';

// const Login=()=>{
//     const [error,setError]=useState('');
//     const email=useSelector((state)=>state.form.email);
//     const password=useSelector((state)=>state.form.password);
//     const dispatch=useDispatch();
//     dispatch(resetForm());
    
    
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//          if(email==='user@gmail.com' && password==='12345'){
//             alert('Login Successful');
//         }else{
//             setError('Email or password not correct');
//         }
//     }

    
//    return(
//         <div>
//             <Navbar />
            
//             <div className="container">
//             <p>Login Form</p>
            
//             <form  onSubmit={handleSubmit} method='post'>
//                 <label>Email</label>
//                 <input type="email" value={email} name="email" onChange={(e) => dispatch(setEmail(e.target.value))} required/>
//                 <label>Password</label>
//                 <input type="password" value={password} name="password" onChange={(e) => dispatch(setPassword(e.target.value))} required/>
                
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <button type="submit">Login</button>

//             </form>
//             </div>
            

//             <Footer />
//         </div>
//     );
// }
// export default Login;

//===========================
import React from 'react';
 import '../css/Login.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail,setPassword,setCpassword,resetForm} from './authSlice';
import Navbar from '../components/Navbar.js';
import Footer from  '../components/Footer.js';

const Login=()=>{
    const [error,setError]=useState('');
    const email=useSelector((state)=>state.form.email);
    const password=useSelector((state)=>state.form.password);
    const cpassword=useSelector((state)=>state.form.cpassword);
    

  
     const dispatch=useDispatch();
    
    

    
     const handleSubmit=(e)=>{
        e.preventDefault();
         if(email==='user@gmail.com' && password==='12345' && password===cpassword){
            alert('Login Successful');
        }else{
            setError('Email or password not correct');
        }
    }
     const handleReset = () => {
        dispatch(resetForm());
      };

    
   return(
        <div>
            <Navbar />
            
            <div className="container">
            <p>Login Form</p>
            
            <form  onSubmit={handleSubmit} method='post'>
                <label>Email</label>
                <input type="email" value={email} name="email" onChange={(e)=>dispatch(setEmail(e.target.value))} required/>
                <label>Password</label>
               <input type="password" value={password} name="password" onChange={(e) => dispatch(setPassword(e.target.value))} required/>
               <label>Confirm Password</label>
                               <input type="password" value={cpassword} name="password" onChange={(e)=>dispatch(setCpassword(e.target.value))}required/>
              
                
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button> <button type="button" onClick={handleReset}>Reset</button>

            </form>
            </div>
            

            <Footer />
        </div>
    );
}
export default Login;