import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ title, author }) => (
  <li>
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <ul>
        <li>
          <button type="button">Comments</button>
        </li>
        <li>
          <button type="button">Remove</button>
        </li>
        <li>
          <button type="button">Edit</button>
        </li>
      </ul>
    </div>
  </li>
);

export default BookList;

BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
