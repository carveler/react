import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Nav() {
  const navStyle = {
    color: 'white',
  };
  return (
    <div>
      <header>
        <nav>
          <h3>Logo</h3>
          <ul className='nav-links'>
            <NavLink
              exact
              style={navStyle}
              activeStyle={{ color: 'green' }}
              to='/'
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to='/about'
              style={navStyle}
              activeStyle={{ color: 'green' }}
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to='/products'
              style={navStyle}
              activeStyle={{ color: 'green' }}
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to='/shop'
              style={navStyle}
              activeStyle={{ color: 'green' }}
            >
              <li>Shop</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
}

// {
//   /* <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li> */
// }
