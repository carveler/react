import React from 'react';
import Pow from '../assets/pow.jpg';
import Blue from '../assets/bluebird.jpg';
import Sleep from '../assets/sleep.jpg';
export default function ShowText({ items }) {
  const freshSnow = items.forecast[0].base.freshsnow_cm;
  const condition = items.forecast[0].base.wx_desc;
  console.log(freshSnow);

  const image = () => {
    if (freshSnow === 0) {
      return Sleep;
    } else if (freshSnow > 15) {
      return Pow;
    } else {
      return Blue;
    }
  };

  const text = () => {
    if (freshSnow === 0) {
      return <h3>No Powder Today. You can go back to Sleep!</h3>;
    } else if (freshSnow > 15) {
      <h3>Today is the Day. Wake up and go shredding!</h3>;
    } else {
      return <h3>Good Packed Snow Condition today!</h3>;
    }
  };

  console.log(text());
  console.log(image());
  //   return (
  //     <div>
  //       <div>{text()}</div>
  //       <img src={image()} height='250' width='350' />
  //     </div>
  //   );
  // }

  return (
    <div>
      {freshSnow > 15 && <img src={Pow} height='250' width='350' />}

      {freshSnow === 0 && <img src={Sleep} height='250' width='350' />}
    </div>
  );
}
