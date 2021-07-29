import React, { useContext } from 'react';
import MyContext from '../context2/MyContext';
export default function Footer() {
  const context = useContext(MyContext);
  const { footerName } = context;
  return (
    <footer>
      {String.fromCharCode(169)}
      {footerName}
    </footer>
  );
}
