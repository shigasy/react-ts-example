import React, { SyntheticEvent, FC, useState } from 'react';

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const increment = (e: SyntheticEvent) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={increment}>
        カウントアップ
      </button>
    </div>
  );
};

export default Counter;
