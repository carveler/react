import React, { useState } from 'react';

export default function Image({ inputHandler }) {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
      inputHandler(event);
    }
  };

  return (
    <div>
      <div>
        <div>
          <input
            type='file'
            name='img'
            // value={image}
            onChange={onImageChange}
          />
        </div>
        <img src={image} size={30} alt='uploaded' />
      </div>
    </div>
  );
}
