import React  from 'react';
import '../css/home.css';
import Navbar from '../components/Navbar.js';
import Footer from  '../components/Footer.js';

const Home=()=>{  
   return(
        <div>
            
            <Navbar />
            <div className="center-container">
            <h1>Home</h1> 
         
            <p>Welcome to Softwallet Algorithms Technologies Pvt Ltd</p>
            <p>At Softwallet Algorithms, we transform ideas into powerful digital products. As a leading software development company, we deliver custom solutions that are scalable, secure, and performance-driven—designed to meet your unique business goals.
</p>
   <h6>🚀 What We Do</h6>   
   <p>We specialize in developing end-to-end software solutions tailored to your business needs:

Custom Software Development
Scalable and robust software built from scratch.

Web & Mobile App Development
User-centric, cross-platform apps that drive engagement.

Cloud Solutions & DevOps
Modern infrastructure that grows with your business.

UI/UX Design
Beautiful interfaces with seamless user experiences.

Software Consulting
Strategic guidance to maximize technology ROI.</p>  
<h6>💡 Why Choose Us</h6>
 <p>✅ Expert team of developers, designers, and strategists
 ✅ Agile development process for faster time-to-market</p>
 
 <p>✅ Transparent communication & on-time delivery
 ✅ Proven track record with startups & enterprises
 ✅ Cutting-edge technologies and best practices</p>
 <h6>🌍 Industries We Serve</h6>
 <p>We work with clients across various domains including:

FinTech

Healthcare

E-commerce

Education

Logistics

Real Estate
</p>
<h6>🛠️ Our Tech Stack</h6>
<p>We leverage the latest and most reliable technologies:

Frontend: React, Angular, Vue.js

Backend: Node.js, Python, .NET, Java

Mobile: React Native, Flutter, Swift, Kotlin

Cloud: AWS, Azure, Google Cloud

Database: MongoDB, PostgreSQL, MySQL, Firebase</p>
<p>📞 Let’s Build Something Great Together
Ready to start your digital transformation journey?

👉 [Contact Us] for a free consultation
👉 [View Our Portfolio] to see our success stories</p>
</div>
            
            <Footer />
        </div>
    );
}
export default Home;