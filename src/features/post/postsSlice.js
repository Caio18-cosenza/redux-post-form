import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [
  {
    id: "1",
    title: "Primeiro post",
    content: "Conteudo do primeiro post"
  },
  {
    id: "2",
    title: "Segundo post",
    content: "Conteudo do segundo post"
  },
  {
    id: "3",
    title: "Terceiro post",
    content: "Conteudo do terceiro post"
  }
];

const PostSlice = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addPost } = PostSlice.actions;

export default PostSlice.reducer;
