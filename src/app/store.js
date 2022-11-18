import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../features/post/postsSlice";

export default configureStore({
  reducer: {
    posts: PostSlice
  }
});
