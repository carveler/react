import React from 'react';
const headerTitle = { title: 'EU商品図鑑' };

const Header = () => {
  const { title } = headerTitle;
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
