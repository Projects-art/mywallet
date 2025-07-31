import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const caseStudies = [
  {
    client: 'MediCare Plus',
    industry: 'Healthcare',
    description:
      'We developed a secure telemedicine platform enabling remote consultations, prescription management, and real-time patient monitoring.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
    impact: 'Reduced hospital footfall by 35% and improved patient satisfaction by 50%.',
  },
  {
    client: 'FinovateX',
    industry: 'FinTech',
    description:
      'Built a next-gen mobile banking app with real-time analytics, biometric login, and seamless UPI integration.',
    technologies: ['Flutter', 'Firebase', 'AWS', 'GraphQL'],
    impact: 'User base grew by 200% in 6 months with 99.9% uptime.',
  },
  {
    client: 'EduFlow LMS',
    industry: 'Education',
    description:
      'Created a scalable learning management system supporting 1M+ users with features like quizzes, certification, and live classrooms.',
    technologies: ['Django', 'React', 'PostgreSQL', 'Redis'],
    impact: 'Enabled 5x faster course delivery and a 300% increase in daily active users.',
  },
  {
    client: 'ShopCart Pro',
    industry: 'E-commerce',
    description:
      'Developed a headless e-commerce platform with AI product recommendations and custom order tracking dashboard.',
    technologies: ['Next.js', 'Strapi', 'ElasticSearch', 'Stripe'],
    impact: 'Improved conversion rate by 27% and reduced cart abandonment by 40%.',
  },
];

const Studies=()=>{
    return(
        <div>
            <Navbar/>

            
             <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Case Studies
        </h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-1">
                {caseStudy.client}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{caseStudy.industry}</p>
              <p className="text-gray-700 mb-4">{caseStudy.description}</p>
              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-600 mb-1">
                  Technologies Used:
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-700">
                  {caseStudy.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 text-blue-800 text-sm font-medium p-3 rounded-lg shadow-inner">
                📈 <strong>Impact:</strong> {caseStudy.impact}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's discuss how we can transform your ideas into real results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
            <Footer/>
        </div>
    );
}
export default Studies;