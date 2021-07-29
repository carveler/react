import React from 'react';
import MyProvider from './context2/MyProvider';

import Header from './compo2/Header';
import Footer from './compo2/Footer';
import './App.css';
import MainContent from './compo2/MainContent';
export default function App() {
  return (
    <div>
      <MyProvider>
        <Header />
        <MainContent />
        <Footer />
      </MyProvider>
    </div>
  );
}
