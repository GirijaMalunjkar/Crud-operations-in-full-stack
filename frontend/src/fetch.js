import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/user')
      .then(response => response.json())
      .then(d => setData(d))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
export default MyComponent;