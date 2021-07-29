import React from 'react';
import Card from './Card';
import characters from '../assets/h.jpg';
import episode from '../assets/j.jpg';
import locations from '../assets/t.jpg';

const CardContainer = () => {
  return (
    <section className='card-container'>
      <Card title='characters' img={characters} />
      <Card title='episode' img={episode} />
      <Card title='locations' img={locations} />
      <Card title='characters' img={characters} />
      <Card title='episode' img={episode} />
      <Card title='locations' img={locations} />
      <Card title='characters' img={characters} />
      <Card title='episode' img={episode} />
      <Card title='locations' img={locations} />
    </section>
  );
};

export default CardContainer;
