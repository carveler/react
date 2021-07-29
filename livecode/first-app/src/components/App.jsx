import React from 'react';
import '../css/App.css';
import Header from './Header';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Footer from './Footer';
function App() {
  return (
    <main>
      <Header />
      <section className='card-container'>
        <Card1 />
        <Card2 />
        <Card3 />
      </section>
      <Footer />
    </main>
  );
}

export default App;
