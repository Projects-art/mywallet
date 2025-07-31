import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const insights = [
  {
    title: 'Why AI Is Revolutionizing Software Development',
    date: 'July 10, 2025',
    summary:
      'Explore how artificial intelligence is transforming code generation, bug fixing, and product personalization across industries.',
    link: '/insights/ai-in-software-development',
  },
  {
    title: 'Top 5 Tech Stacks for Scalable Web Applications in 2025',
    date: 'June 25, 2025',
    summary:
      'A detailed comparison of modern tech stacks including MERN, MEVN, and JAMstack — and when to choose what.',
    link: '/insights/best-tech-stacks-2025',
  },
  {
    title: 'How We Scaled an LMS to 1 Million Users',
    date: 'June 10, 2025',
    summary:
      'Real-world case study: The architecture, optimization, and DevOps decisions that helped scale a learning platform for global reach.',
    link: '/insights/lms-scaling-case-study',
  },
  {
    title: 'Design Systems: Why Your Product Needs One',
    date: 'May 30, 2025',
    summary:
      'Understand how design systems improve product consistency, speed up development, and ensure better UX across platforms.',
    link: '/insights/design-systems-benefits',
  },
];
const Insights=()=>{
    return(
        <div>
            <Navbar/>
            
             <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Insights & Thought Leadership
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Stay informed with the latest trends, case studies, and expert perspectives on technology, business, and innovation from our team.
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow hover:shadow-xl transition"
            >
              <p className="text-sm text-blue-600 font-medium mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{post.summary}</p>
              <a
                href={post.link}
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Have an Idea or Topic to Explore?
          </h3>
          <p className="text-gray-600 mb-6">
            We’re always eager to discuss what’s next in tech. Let’s connect!
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
            <Footer/>
        </div>
    );
}
export default Insights;