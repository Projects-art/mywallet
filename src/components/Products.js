import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from  '../components/Footer.js';
const products = [
  {
    id: 1,
    name: 'SmartBilling Pro',
    description: 'A complete invoicing and billing software for small businesses.',
    image: '/billing.jpg',
    width:'100px',
    height:'100px',
  },
  {
    id: 2,
    name: 'EduTrack LMS',
    description: 'Learning Management System for schools and coaching centers.',
     image: '/billing.jpg',
    width:'100px',
    height:'100px',
    
  },
  {
    id: 3,
    name: 'HRPro Suite',
    description: 'HR management software for leave, attendance, and payroll.',
     image: '/billing.jpg',
    width:'100px',
    height:'100px',
  },
  {
    id: 4,
    name: 'InventoryX',
    description: 'Simple and powerful inventory and stock tracking software.',
     image: '/billing.jpg',
    width:'100px',
    height:'100px',
  },
];
const Products=()=>{
    return(
        <div>
            
            <Navbar/>
           
                <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Products</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img
              
              src={product.image}
              alt={product.name}
               style={{ width: product.width, height: product.height }}
              
               
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
            <Footer/>
        </div>
    );
}
export default Products;