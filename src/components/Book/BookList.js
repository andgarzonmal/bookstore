import React from 'react';
import PropTypes from 'prop-types';
import './BookList.css';

function BookList({
  title, author, deletebook, id, category,
}) {
  const removeBook = (id) => {
    deletebook(id);
  };

  return (
    <li className="book">
      <div>
        <p className="category">{category}</p>
        <h1 className="title">{title}</h1>
        <h4 className="author">{author}</h4>
        <ul className="comments">
          <li className="comment">
            <button type="button">Comments</button>
          </li>
          <li className="comment remove">
            <button type="button" onClick={() => removeBook(id)}>Remove</button>
          </li>
          <li className="comment">
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div>
        <div className="progress-containner">
          <div>
            <div className="progress">
              c
            </div>
          </div>
          <div>
            <h1>100%</h1>
            <span>completed</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="current-chap">current chapter</h1>
        <h2 className="chap">Final Chapter</h2>
        <button className="progress-update" type="button">Update Progress</button>
      </div>
    </li>
  );
}

export default BookList;

BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  deletebook: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
