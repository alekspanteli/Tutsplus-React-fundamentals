import { useState } from 'react';

const Counter = (props) => {
  const [counter, setCounter] = useState(props.startAt);

  // setTimeout(() => setCounter(counter + props.countBy), 1000);

  const CountUp = (e) => {
    setCounter(counter + props.countBy);
    console.log(e);
  }

  const CountDown = (e) => {
    setCounter(counter - props.countBy);
    console.log(e);
  }

  return (
    <>
      <p>Start at: {props.startAt}</p>
      <p>Count By: {props.countBy}</p>
      <h4>{counter}</h4>
      <div className="d-flex gap-1">
        <button className="btn btn-primary" onClick={CountUp}>Count Up</button>
        <button className="btn btn-danger" onClick={CountDown}>Count Down</button>
      </div>
    </>
  );
};

Counter.defaultProps = {
  startAt: 0,
  countBy: 1,
};

export default Counter;
