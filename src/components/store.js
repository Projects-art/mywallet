
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import postsReducer from './postsSlice';

const store = configureStore({
  reducer: {
    form:authReducer,
    posts: postsReducer
  }
});

export default store;
