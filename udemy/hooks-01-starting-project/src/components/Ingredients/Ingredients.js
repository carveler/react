import React, { useState } from 'react';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import Search from './Search';

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    setUserIngredients((prevIngredientts) => [
      ...prevIngredientts,
      { id: Math.random() * 1000, ...ingredient },
    ]);
  };
  return (
    <div className='App'>
      <IngredientForm />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
