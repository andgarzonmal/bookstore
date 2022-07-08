import React from 'react';

export default function Form() {
  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <input type="text" placeholder="book title" />
      <select name="cars" id="cars">
        <option value="Action">Action</option>
        <option value="History">History</option>
      </select>
      <button type="button">ADD BOOK</button>
    </div>
  );
}
