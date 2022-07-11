import React, { useState } from 'react';
import BookList from './BookList';

function Bookscontainer() {
  const bookshelf = () => {
    const books = [
      {
        id: 1,
        title: 'Book one',
        author: 'Author one',
      },
      {
        id: 2,
        title: 'Book two',
        author: 'Author two',
      },
      {
        id: 3,
        title: 'Book three',
        author: 'Author three',
      },
    ];
    return books;
  };

  const [books] = useState(bookshelf());

  return (
    <div className="books-container">
      <ul>
        {books.map(({ id, title, author }) => (
          <BookList key={id} title={title} author={author} />
        ))}
      </ul>
    </div>
  );
}

export default Bookscontainer;
