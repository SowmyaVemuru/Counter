import React, { useEffect, useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if(count > 0){
        setCount(count - 1)};
    }


  useEffect(() => {
    console.log("Count:", count);
  }, [count]);

  return (
    <div className='container'>
      <h2>Counter</h2>
      <span className='count'>{count}</span>

      {/* Buttons Side by Side */}
      <div className="button-container">
        <button className='button' onClick={handleDecrement}>Decrement</button>
        <button className='button' onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
