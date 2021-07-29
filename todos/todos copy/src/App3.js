///useEffect

import React, { useState, useEffect } from 'react';

export default function App3() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /////////////////////////////////////

  //   const [resourceType, setResourceType] = useState('posts');
  //   const [items, setItems] = useState([]);
  /////////////////////////////////////
  //   useEffect(() => console.log('render'), [resourceType]);
  //////////////////////////////////////////////////

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //       .then((response) => response.json())
  //       .then((json) => setItems(json));
  //   }, [resourceType]);
  return <div>{windowWidth}</div>;
}
//////////////////////////////////////
// <div>
//   <button onClick={() => setResourceType('posts')}>Posts</button>
//   <button onClick={() => setResourceType('users')}>Users</button>
//   <button onClick={() => setResourceType('comments')}>comments</button>

//   <h1>{resourceType}</h1>
//   {items.map((item) => {
//     return <pre>{JSON.stringify(item)}</pre>;
//   })}
// </div>
//);
// }
