import React, { useState, useEffect } from 'react';
// import data from '../data.json'; // import your local JSON file
import data from '../minicomponents/data.json';


import Navbar from '../components/Navbar.js';
import Footer from  '../components/Footer.js';

const Search=()=>{
    const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm]);
    return(
        <div>
            <Navbar/>
            <h1>Search Here</h1>
             <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Search Fruits</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
        {filteredData.length === 0 && <li>No results found.</li>}
      </ul>
    </div>
            <Footer/>
        </div>
    );
}
export default Search;