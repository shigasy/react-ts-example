import React, { FC } from 'react';

interface TimerFormalProps {
  timeLeft: number;
  reset: () => void;
}

const TimerComponentsFormal: FC<TimerFormalProps> = ({ timeLeft, reset }) => (
  <div>
    <h3>時間: {timeLeft}</h3>
    <button type="button" onClick={reset}>
      リセット
    </button>
  </div>
);

export default TimerComponentsFormal;
