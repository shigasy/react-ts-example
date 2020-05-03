import React, { FC, useState, useEffect } from 'react';

const LIMIT = 20;

const TimerFC: FC = () => {
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  const tick = () => {
    setTimeLeft(prevTime => (prevTime === 0 ? LIMIT : prevTime - 1));
  };

  const reset = () => {
    setTimeLeft(LIMIT);
  };

  // const tick2 = () => {
  //   setTimeLeft(prevTime => prevTime - 1);
  // };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  // useEffect(() => {
  //   const timerId = setInterval(tick2, 1000);

  //   return () => clearInterval(timerId);
  // }, []);

  // useEffect(() => {
  //   if (timeLeft === 0) reset();
  // });

  return (
    <div>
      <h2>{timeLeft}</h2>
      <button type="button" onClick={reset}>
        reset
      </button>
    </div>
  );
};
export default TimerFC;
