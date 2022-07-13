import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList';
import { deletebook } from '../Redux/books/books';

function Bookscontainer() {
  const state = useSelector((state) => state.bookShelf);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletebook(id));
  };
  return (
    <div className="books-container">
      <ul>
        {state.map(({ id, title, author }) => (
          <BookList
            key={id}
            id={id}
            title={title}
            author={author}
            deletebook={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default Bookscontainer;
