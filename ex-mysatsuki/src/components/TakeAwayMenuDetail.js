import React from 'react';
import { useHistory } from 'react-router-dom';
import edamame from '../assets/food/edamame.jpg';
import { addItem } from '../actions/basketActions';
import { useDispatch } from 'react-redux';
import { BasketItem } from './BasketItem';
import Search from './Search';
export const TakeAwayMenuDetail = (props) => {
  // console.log(props);
  const item = props.location.state.item;
  const { name, description, price } = item;
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <img src={edamame}></img>

        <div>{name}</div>
        <div> {description}</div>
        <div>price: €{price.price}</div>
      </div>

      <button onClick={() => dispatch(addItem(item))}>add to basket</button>

      <button onClick={() => history.push('/takeawaymenu')}>
        Back to Menu
      </button>
    </div>
  );
};
{
  /* <button onClick={() => props.history.goBack()}>Go back</button> */
}
