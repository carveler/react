import React, { useContext } from 'react';
import MyContext from '../context2/MyContext';
export default function Header() {
  const context = useContext(MyContext);
  const { headerLogo } = context;
  return (
    <header>
      <h2>{headerLogo}</h2>
    </header>
  );
}
