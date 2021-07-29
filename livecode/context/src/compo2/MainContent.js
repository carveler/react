import React from 'react';
import FetchData from './FetchData';
import ListItems from './ListItems';
export default function MainContent() {
  return (
    <div>
      <section>
        <FetchData />
        <ListItems />
      </section>
    </div>
  );
}
