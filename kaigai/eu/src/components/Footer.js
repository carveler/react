import React from 'react';
const footerItem = {
  copy: '©',
  year: new Date().getFullYear(),
  name: 'EU商品図鑑',
};

const Footer = () => {
  const { copy, year, name } = footerItem;
  return (
    <footer>
      <p className='copyright'>
        {copy}
        {name} {year}
      </p>
    </footer>
  );
};

export default Footer;
