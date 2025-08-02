import React from 'react';
import '../css/careers.css';
import Navbar from './Navbar';
import Footer from './Footer';
const jobOpenings = [
  {
    title: 'Frontend Developer',
    location: 'Remote / Srinagar, India',
    type: 'Full-Time',
    description:
      'Build modern web interfaces using React.js, Tailwind CSS, and RESTful APIs. Collaborate closely with designers and backend developers.',
    applyLink: '/apply/frontend-developer',
  },
  {
    title: 'Backend Developer',
    location: 'Remote / Srinagar, India',
    type: 'Full-Time',
    description:
      'Develop scalable APIs and microservices using Node.js or Django. Experience with databases and DevOps is a plus.',
    applyLink: '/apply/backend-developer',
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Contract',
    description:
      'Design intuitive and user-friendly experiences for mobile and web. Familiarity with Figma or Adobe XD is required.',
    applyLink: '/apply/ui-ux-designer',
  },
  {
    title: 'Digital Marketing Specialist',
    location: 'Srinagar, India',
    type: 'Full-Time',
    description:
      'Plan and execute SEO, social media, and paid ad campaigns. Track performance metrics and optimize for conversions.',
    applyLink: '/apply/digital-marketing',
  },
];

const Careers=()=>{
    return(
        <div>
            <Navbar/>
            
            <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Join Our Team</h1>
          <p className="text-gray-600 text-lg">
            At Softwallet Algorithms, we’re building more than just software — we’re building a culture of innovation, growth, and collaboration.
          </p>
        </div>

        {/* Culture Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🌍 Remote Friendly</h3>
            <p className="text-sm text-gray-600">Work from anywhere with flexible hours and a fully digital team environment.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">📚 Learn & Grow</h3>
            <p className="text-sm text-gray-600">We invest in training, certifications, and learning opportunities for every team member.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🚀 Impactful Work</h3>
            <p className="text-sm text-gray-600">Work on meaningful projects with real-world impact across industries.</p>
          </div>
        </div>

        {/* Open Positions */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Current Openings</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {job.location}</p>
              <p className="text-sm text-gray-600 mb-3"><strong>Type:</strong> {job.type}</p>
              <p className="text-sm text-gray-700 mb-4">{job.description}</p>
              <a
                href={job.applyLink}
                className="text-white bg-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Don’t see a role that fits?</h3>
          <p className="text-gray-600 mb-6">We’re always on the lookout for great talent. Drop us your resume and we’ll get in touch.</p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Send Resume
          </a>
        </div>
      </div>
    </div>
            <Footer/>
        </div>
    );
}
export default Careers;