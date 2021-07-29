import React from 'react';
import { NavLink } from 'react-router-dom';

const headerTitle = { title: 'EU商品図鑑' };

const Header = () => {
  const { title } = headerTitle;
  return (
    <header>
      <NavLink to='/' exact>
        <h1>{title}</h1>
      </NavLink>
    </header>
  );
};

export default Header;
