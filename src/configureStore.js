import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './Redux/books/books';
import { categoriesReducers } from './Redux/Categories/categories';

const store = configureStore({
  reducer: {
    bookShelf: booksReducer,
    categories: categoriesReducers,
  },
});

export default store;
