// import React, { useState } from 'react';

// export default function App6() {
//   const initialValues = {

//     name: '',
//     price: '',
//     supermarket: '',
//   };

//   const [values, setValues] = useState([], initialValues);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   //   const handleSubmit = (e) => {
//   //     const { name, value } = e.target;

//   //     e.preventDefault();

//   //     setValues(() => {
//   //       return [...values, { [name]: value }];
//   //     });

//   //     this.setState({
//   //       lists: [
//   //           ...this.state.lists,
//   //           {
//   //             title: this.state.title,
//   //             author: this.state.author
//   //           }],
//   //       title:"",
//   //       author:""
//   //   });

//   return (
//     <>
//       <form>
//         <input
//           value={values.name}
//           onChange={handleInputChange}
//           name='name'
//           label='Name'
//         />
//         <input
//           value={values.price}
//           onChange={handleInputChange}
//           name='price'
//           label='Price'
//         />
//         <input
//           value={values.supermarket}
//           onChange={handleInputChange}
//           name='supermarket'
//           label='Supermarket'
//         />
//         <button
//           type='submit'
//           //   onClick={handleSubmit}
//         >
//           Post
//         </button>
//       </form>

//       {/* {values.map((value) => (
//         <div key={value.title}>
//           <p>Name:{value.name}</p>
//           <p>Price:{value.price}</p>
//           <p>Supermarket:{value.supermarket}</p>
//         </div>
//       ))} */}
//     </>
//   );
// }

///////////////////////////////////////////

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      title: '',
      author: '',
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      lists: [
        ...this.state.lists,
        {
          title: this.state.title,
          author: this.state.author,
        },
      ],
      title: '',
      author: '',
    });
  };
  render() {
    return (
      <div className='App'>
        <p>タイトルと作者</p>
        <p>タイトル</p>
        <input
          type='text'
          name='title'
          onChange={this.handleChange}
          value={this.state.title}
        />
        <p>作者</p>
        <input
          type='text'
          name='author'
          onChange={this.handleChange}
          value={this.state.author}
        />
        <button onClick={this.handleSubmit}>send</button>
      </div>
    );
  }
}

export default App;
