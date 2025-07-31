import React from 'react';
import Navbar from '../components/Navbar.js';
import '../css/services.css';
// import Search from './Search.js';
import Footer from  '../components/Footer.js';

const Services=()=>{
    return(
        <div>

<Navbar/>
{/* <Search/> */}
<h1>Our Services</h1>
<h5>🛠️ Our Core Services</h5>
<h6>
🔹 Custom Software Development</h6>
We build tailored, scalable, and secure software solutions that align with your business goals — from enterprise-grade systems to custom business tools.
<h6>
🔹 Web Development</h6>
We create responsive, SEO-optimized websites and high-performance web applications using modern frameworks like React, Next.js, and Node.js.
<h6>
🔹  Mobile App Development</h6>
We develop feature-rich mobile applications for Android and iOS platforms, using native and cross-platform tools like Flutter and React Native.
<h6>
🔹 UI/UX Design</h6>
Our creative designers craft intuitive, user-centered interfaces that enhance engagement and deliver seamless digital experiences.
<h6>
🔹 Cloud & DevOps Services</h6>
We offer cloud infrastructure setup, CI/CD automation, and DevOps consulting using platforms like AWS, Azure, and Google Cloud to ensure reliability and scalability.
<h6>
🔹 Software Testing & QA</h6>
Quality assurance is baked into every stage of development, with automated and manual testing practices that guarantee bug-free releases.
<h6>
🔹 IT Consulting & Strategy</h6>
Leverage our expertise to make smarter tech decisions. We provide consulting on software architecture, tech stack selection, and digital transformation.

<Footer/>
        </div>
    );
}
export default Services;