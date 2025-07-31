import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const industries = [
  {
    title: 'Healthcare & Life Sciences',
    icon: '🏥',
    description: 'Streamline patient care, manage sensitive data securely, and meet compliance regulations with custom healthcare solutions.',
    solutions: ['EHR Systems', 'Telemedicine Apps', 'Hospital Management Software', 'Wearable Integrations'],
  },
  {
    title: 'Finance & FinTech',
    icon: '🏦',
    description: 'Build secure, scalable platforms that transform banking and finance with next-gen digital infrastructure.',
    solutions: ['Mobile Banking', 'Digital Wallets', 'Payment Gateways', 'Blockchain Solutions'],
  },
  {
    title: 'Retail & E-commerce',
    icon: '🛍️',
    description: 'Reimagine customer experience with intelligent e-commerce and retail solutions that boost sales and loyalty.',
    solutions: ['E-commerce Platforms', 'POS Systems', 'Inventory Management', 'AI Recommendations'],
  },
  {
    title: 'Manufacturing & Logistics',
    icon: '🏭',
    description: 'Enhance productivity, reduce downtime, and optimize your supply chain with smart automation and real-time analytics.',
    solutions: ['ERP Software', 'IoT Tracking', 'Warehouse Automation', 'Production Dashboards'],
  },
  {
    title: 'Education & eLearning',
    icon: '🎓',
    description: 'Empower learners and educators with scalable platforms designed for modern education needs.',
    solutions: ['LMS Platforms', 'Virtual Classrooms', 'Mobile Learning', 'Certification Tools'],
  },
  {
    title: 'Hospitality & Travel',
    icon: '🏨',
    description: 'Deliver seamless experiences for guests and streamline operations with digital hospitality solutions.',
    solutions: ['Booking Engines', 'Property Management Systems', 'Concierge Apps', 'Aggregator Platforms'],
  },
  {
    title: 'Real Estate & Construction',
    icon: '🏗️',
    description: 'Digitize real estate and construction with scalable solutions for better control and insight.',
    solutions: ['CRM Systems', 'Listing Portals', 'Project Management Tools', 'AR/VR Virtual Tours'],
  },
  {
    title: 'Media & Entertainment',
    icon: '📱',
    description: 'Create and distribute content on platforms built for reach, performance, and monetization.',
    solutions: ['OTT Platforms', 'Streaming Apps', 'Digital Publishing', 'Content Monetization Tools'],
  },
  {
    title: 'Startups & Entrepreneurs',
    icon: '🚀',
    description: 'We help startups launch fast with rapid MVPs and scalable architectures for future growth.',
    solutions: ['MVP Development', 'Pitch Prototypes', 'SaaS Platforms', 'Web & Mobile Apps'],
  },
];
const Industries=()=>{
    return(
        <div>
            <Navbar/>
           
             <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Industries We Serve</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.title}</h3>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx}>{solution}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Let’s Build Your Industry’s Future Together</h3>
          <p className="text-gray-600 mb-6">Contact us today to discuss how we can help you digitally transform your business.</p>
         
        </div>
      </div>
    </div>
            <Footer/>
            
        </div>
    );
}
export default Industries;