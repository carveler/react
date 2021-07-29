import { createSlice } from '@reduxjs/toolkit';
const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
];
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      return [...state, action.payload];
    },
  },
});

// addPost(state, {payload}){
//     return [...state, payload]
// }
// const newArr= [...state, payload]
//return newArr

///DO NOT DO THIS
// addPost(state, {payload}){
//     state.push(payload)
// }
// Immer is woking
//createSlice is a function return  object { inside reducer, action etc... }
export default postsSlice.reducer; // postsSlice.reducer =postReducer   postsSlice is object

// export const postReducer= postsSlice.reducer  --==> import {postReducer}
export const { addPost } = postsSlice.actions;
