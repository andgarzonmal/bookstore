import React from 'react';
import PropTypes from 'prop-types';

function BookList({
  title, author, deletebook, id,
}) {
  return (
    <li>
      <div>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <ul>
          <li>
            <button type="button">Comments</button>
          </li>
          <li>
            <button type="button" onClick={() => deletebook(id)}>Remove</button>
          </li>
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default BookList;

BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  deletebook: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
