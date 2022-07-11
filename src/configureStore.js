import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './Redux/books/books';

const store = configureStore({
  reducer: {
    bookShelf: booksReducer,
  },
});

export default store;
