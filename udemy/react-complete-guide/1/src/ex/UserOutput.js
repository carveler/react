import React from 'react';

export default function UserOutput(props) {
  return (
    <div>
      <p style={props.style}>How are you,{props.name} </p>
    </div>
  );
}

// //////answer
// import React from 'react';
// const userOutput = (props) => {
//   return (
//     <div>
//       <p>random text , {props.userName}</p>
//       <p>korhauirhae</p>
//     </div>
//   );
// };

// export default userOutput;
