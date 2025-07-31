import React  from 'react';
import Navbar from '../components/Navbar.js';
// import { handleClick } from '../minicomponents/Button.js';
// import { Button } from '../minicomponents/Button.js';
import Footer from  '../components/Footer.js';

const About=()=>{
    return(
        <div>
            <Navbar />
<h1>About Us</h1>
<h6>Driving Innovation. Empowering Businesses</h6>
<p>At Softwallet Algorithms Technologies pvt Ltd, we’re more than just a software company—we’re your trusted technology partner.</p>

<p>Founded with a vision to bridge the gap between ideas and technology, we specialize in delivering tailor-made software solutions that help businesses of all sizes scale, innovate, and thrive in the digital age.</p>
<h6>
👨‍💻 Who We Are</h6>
<p>We are a team of passionate engineers, designers, strategists, and problem-solvers committed to building high-impact digital products. From startups to global enterprises, we work closely with our clients to turn challenges into growth opportunities.</p>
<p>With years of experience and a strong technical foundation, we deliver solutions that are not only innovative but also efficient, secure, and scalable.</p>
<h6>🧭 Our Mission</h6>
<p>To empower businesses through innovative, user-centric, and reliable software solutions that drive real-world impact.</p>
<h6>👁️ Our Vision</h6>
<p>To be a global leader in software innovation—transforming how businesses operate, compete, and grow through cutting-edge technology.</p>
<h6>💼 Our Core Values</h6>
<p>Innovation – We embrace change and always push boundaries.

Integrity – We build trust through honesty, transparency, and accountability.

Excellence – We aim for the highest quality in everything we do.

Collaboration – We believe great things happen when we work together.

Customer Focus – Your success is our success.</p>
<h6>🌐 What Sets Us Apart</h6>
<p>Agile & collaborative development process

Skilled and dedicated in-house team

Client-first approach with transparent communication

Proven track record across industries

Support that continues after launch</p>
<h6>📍 Where We Are Based</h6>
<p>We operate globally, with our headquarters in [City, Country], and remote teams working across multiple time zones to support clients around the world.</p>
<h6>📢 Let’s Collaborate</h6>
<p>At [Your Company Name], we don’t just write code—we craft digital experiences that create lasting value. Whether you're looking to build a product from scratch, scale your current systems, or explore new technologies, we’re here to help.</p>
<p>👉 [Get in Touch] with us today to start your journey.</p>
{/* <Button onClick={handleClick}
             color="red"
             backgroundColor="#28a745"
             margin="16px"
             padding="12px 24px"
             label="Submit here" /> */}

<Footer />
        </div>
    );

}
export default About;