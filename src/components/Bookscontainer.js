import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './Book/BookList';
import { deletebook, readBooks } from '../Redux/books/books';

function Bookscontainer() {
  const state = useSelector((state) => state.bookShelf);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readBooks());
  }, []);

  const handleDelete = (id) => {
    dispatch(deletebook(id));
  };
  return (
    <div className="books-container">
      <ul>
        {state.map(({
          id, title, author, category,
        }) => (
          <BookList
            key={id}
            id={id}
            title={title}
            author={author}
            deletebook={handleDelete}
            category={category}
          />
        ))}
      </ul>
    </div>
  );
}

export default Bookscontainer;
