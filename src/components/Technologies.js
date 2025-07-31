import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const techStack = [
  {
    category: 'Frontend',
    technologies: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Express.js', 'Django', 'Laravel', 'Spring Boot', 'FastAPI', 'Ruby on Rails'],
  },
  {
    category: 'Mobile',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'],
  },
  {
    category: 'Database',
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'SQLite'],
  },
  {
    category: 'DevOps & Cloud',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Vercel', 'Netlify', 'Azure', 'CI/CD'],
  },
  {
    category: 'Tools & Platforms',
    technologies: ['Figma', 'Postman', 'Jira', 'Slack', 'Git', 'Bitbucket', 'Notion', 'Trello'],
  },
];
const Technologies=()=>{
    return(
        <div>
            <Navbar/>
          
            <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Technology Stack
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We use the latest and most reliable technologies to build scalable, secure, and high-performance solutions tailored to your business needs.
        </p>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                {section.category}
              </h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                {section.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Want to Build with the Right Tech?
          </h3>
          <p className="text-gray-600 mb-6">
            We help you choose the perfect stack for performance, scalability, and growth.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Let’s Discuss Your Project
          </a>
        </div>
      </div>
    </div>
            <Footer/>
        </div>
    );
}
export default Technologies;