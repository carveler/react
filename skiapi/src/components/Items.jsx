import React from 'react';
import ShowText from './ShowText';
export default function Item({ items }) {
  console.log({ items });

  return (
    <>
      <ShowText items={items} />
      <ul>
        <li key={items.id}>
          <p>
            {items.name}, {items.country}
          </p>
          <p>{items.forecast[0].date}</p>
          <p>New Snow: {items.forecast[0].base.freshsnow_cm}cm</p>
          <p>Ski Condition: {items.forecast[0].base.wx_desc}</p>
          <p>Temperature!: {items.forecast[0].base.temp_c}°C </p>

          <p>{/* <img src={'../assets/set/Clear.gif'} /> */}</p>
        </li>
      </ul>
    </>
  );
}

// {items.forecast[0].base.freshsnow_cm > 15 ? (
//   <p> Wake up! Today is the Day. Let's Go Shredding!!!!</p>
// ) : (
//   <p>You can go back to sleep! </p>
// )}

{
  /* {icon}
                  <img src={`../assets/set/${icon}`} /> */
}
{
  /* <img src={clearIcon}></img> */
}

{
  /* src={require('../images/spin-gear.png')} */
}
{
  /* ))} */
}
