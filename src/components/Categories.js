import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../Redux/Categories/categories';

export default function Categories() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [state, setstate] = useState(false);

  const handleButton = () => {
    setstate((state) => !state);
    dispatch(checkStatus());
  };

  return (
    <div>
      <h1>
        This is my categories section
      </h1>
      <button type="button" id="status" onClick={handleButton}>status</button>
      {state ? <h3>click to check status</h3> : (
        <h3>
          {' '}
          <b>Status:</b>
          {status}
        </h3>
      ) }
    </div>
  );
}
