import React, { FC, useState, useEffect } from 'react';
import { TimerComponentsFormal } from '../components/index';

// custom hook
const useTimer = (limitSec: number): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limitSec);

  const reset = () => setTimeLeft(limitSec);

  useEffect(() => {
    const tick = () => {
      setTimeLeft(prevTime => (prevTime === 0 ? limitSec : prevTime - 1));
    };
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, [limitSec]);

  return [timeLeft, reset];
};

const TimerContainerForm: FC = () => {
  const LIMIT = 60;
  const [timeLeft, reset] = useTimer(LIMIT);

  return <TimerComponentsFormal timeLeft={timeLeft} reset={reset} />;
};

export default TimerContainerForm;
