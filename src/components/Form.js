import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addbook } from '../Redux/books/books';
import './Form.css';

export default function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = () => {
    const mybook = {
      id: `${Math.floor(Math.random() * 100)}`,
      title,
      author,
      category,
    };
    dispatch(addbook(mybook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="form">
      <h1 className="form-header">ADD NEW BOOK</h1>
      <input
        className="title-imput"
        type="text"
        value={title}
        onChange={(e) => handleTitle(e)}
        placeholder="book title"
        required
      />
      <input
        className="title-imput"
        type="text"
        value={author}
        onChange={(e) => handleAuthor(e)}
        placeholder="book author"
        required
      />
      <select className="title-select" name="category" id="category" onChange={(e) => handleCategory(e)}>
        <option value="default">Choose category...</option>
        <option value="Action">Action</option>
        <option value="History">Economy</option>
        <option value="History">Science fiction</option>
      </select>
      <button
        className="button-submit"
        type="button"
        onClick={handleSubmit}
      >
        ADD BOOK
      </button>
    </form>
  );
}
