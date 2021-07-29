import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
export default function Rate({ changeHandler }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              onChange={(e) => changeHandler(e)}
            />
            <AiFillStar
              className='star'
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#eee'}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
