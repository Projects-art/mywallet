import React,{useState,useEffect} from 'react';




const Dataa=()=>{
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(json => setData(json))
      .catch(error => console.error('Error loading data:', error));
  }, []);
    
    return(
        
       <div>
      {/* <h2>User List</h2>
      <ul >
        {data.map(user => (
          <li key={user.id}>
            <p><b>Name:</b> {user.name}</p>
            <p><strong>Age:</strong> {user.age}</p>
          </li>
        ))}
      </ul> */}
     <h1>users data</h1>
     <ul>
        {data.map(user=>(
            <li key={user.id}>
                <p>{user.name}</p>
                <p>{user.age}</p>
                </li>
            ))}
     </ul>
    </div>
    
    
    );
}
export {Dataa};