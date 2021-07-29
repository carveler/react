import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, decrease, deleteItem } from '../actions/basketActions';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';

export const BasketItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item.id);
  return (
    <div className='basket_item_card'>
      <div className='basket_item_info'>
        <h4>
          {item.qty}×{item.name}
        </h4>
        <p>€{item.price.price * item.qty}</p>
      </div>
      <div className='basket_button_container'>
        <button
          onClick={() => dispatch(deleteItem(item.id))}
          className='btn_delete'
        >
          Delete
        </button>
        <div className='basket_qty_wrap'>
          <button
            onClick={() => dispatch(decrease(item))}
            className='btn_decrease'
          >
            <AiFillMinusSquare size={35} color={'#504949'} />
          </button>
          <p>{item.qty}</p>
          <button
            onClick={() => dispatch(addItem(item))}
            className='btn_increase'
          >
            <AiFillPlusSquare size={35} color={'#504949'} />
          </button>
        </div>
      </div>
    </div>
  );
  //
};
// return (
//   <div>
//     <div>name:{item.name}</div>
//     <div>price:{item.price.price}</div>
//     <div>qty: {item.qty}</div>
//     <button onClick={() => dispatch(addItem(item))}>add item</button>

//     <button onClick={() => dispatch(decrease(item.id))}>decrease item</button>
//     <button onClick={() => dispatch(deleteItem(item.id))}>delete item</button>
//   </div>
// );
