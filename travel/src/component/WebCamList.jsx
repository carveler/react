import React from 'react';

export default function WebCamList({ webCams }) {
  return (
    <div>
      {webCams.result.webcams.map((webcam) => (
        <div key={webcam.id} className='webcam_container'>
          <div> {webcam.title}</div>
        </div>
      ))}
    </div>
  );
}
