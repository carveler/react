import React from 'react';

export default function PhotoList({ photos }) {
  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id} className='photos'>
          <img src={photo.urls.thumb} alt={photo.urls.alt_description} />
          <p>
            {photo.user.first_name}
            {photo.user.last_name}
          </p>
        </div>
      ))}
    </div>
  );
}
