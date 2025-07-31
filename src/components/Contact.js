// import React,{useState} from 'react';
// import '../css/Login.css';
// import Navbar from '../components/Navbar.js';
// import Footer from  '../components/Footer.js';

// const Contact=()=>{
//     const [name,setName]=useState('');
//              const [email,setEmail]=useState('');
//              const [tel,setTel]=useState('');
//              const [password,setPassword]=useState('');
//              const [error,setError]=useState('');
//              const handleSubmit=(e)=>{
//                  e.preventDefault();
//                  if(email==='user@gmail.com' && password==='password123'){
//                      alert('Login Successful');
//                  }else{
//                      setError('Email or password not correct');
//                  }
//              }
//     return(
//         <div>
//             <Navbar />
// <h1>This the contact page</h1>
// <div className="container">
            
//             <form className="login-form" onSubmit={handleSubmit} method='post'>
//             <label>Name</label>
//             <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)} required/>
//                 <label>Email</label>
//                 <input type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} required/>
//                 <label>Telephone No</label>
//                 <input type="tel" value={tel} name="tel" pattern="[0-9]{10}" onChange={(e)=>setTel(e.target.value)} required/>
//                 <label>Password</label>
//                 <input type="password" value={password} name="password" onChange={(e)=>setPassword(e.target.value)}required/>
                
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <button type="submit">Login</button>

//             </form>
//             </div>
// <Footer />
//         </div>
//     );
// }
// export default Contact;
//=============================

import React from 'react';
import '../css/Login.css';
// import {useEffect} from 'react';
// import { Button } from '../minicomponents/Button.js';
// import { handleClick } from '../minicomponents/Button.js';
import { useSelector, useDispatch } from 'react-redux';
import { setName,setContact,setEmail,setPassword,setCpassword,resetForm} from './authSlice';

import Navbar from './Navbar.js';
import Footer from  './Footer.js';


const Contact=()=>{
        const name=useSelector((state)=>state.form.name);
        const contact=useSelector((state)=>state.form.contact);
        const email=useSelector((state)=>state.form.email);
        const password=useSelector((state)=>state.form.password);
        const cpassword=useSelector((state)=>state.form.cpassword);
        // const submitted = useSelector((state) => state.form.submitted);
    
      
         const dispatch=useDispatch();     
         
        //  useEffect(() => {
        //     if (submitted) {
        //       dispatch(resetForm());
        //     }
        //   }, [submitted, dispatch]);

         const handleSubmit=(e)=>{
             e.preventDefault();
            alert('Data submitted');
         }
         const handleReset = () => {
    dispatch(resetForm());
  };
    return(
        <div>
            <Navbar />
            {/* <Button onClick={handleClick}
                         color="blue"
                         backgroundColor="cyan"
                         margin="16px"
                         padding="12px 24px"
                         label="Not Submit here" /> */}

            <h1>Contact Us</h1>
            <div className="container">
            
            <form className="login-form" onSubmit={handleSubmit} method='post'>
            <label>Name</label>
            <input type="text" value={name} name="name" onChange={(e)=>dispatch(setName(e.target.value))} required/>
            <label>Contact</label>
            <input type="number" value={contact} name="contact" onChange={(e)=>dispatch(setContact(e.target.value))} required/>
            
                <label>Email</label>
                <input type="email" value={email} name="email" onChange={(e)=>dispatch(setEmail(e.target.value))} required/>
                
                <label>Password</label>
                <input type="password" value={password} name="password" onChange={(e)=>dispatch(setPassword(e.target.value))}required/>
                <label>Confirm Password</label>
                <input type="password" value={cpassword} name="password" onChange={(e)=>dispatch(setCpassword(e.target.value))}required/>
                
                
                <button type="submit">Signup</button>  <button type="button" onClick={handleReset}>Reset</button>

            </form>
            </div>
            <Footer />
        </div>
    );
}
export default Contact;
