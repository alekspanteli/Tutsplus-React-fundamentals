import { useState } from 'react';

const Counter = (props) => {

  const [counter, setCounter] = useState(props.startAt);

  setTimeout(() => setCounter(counter + props.countBy), 1000);

  return (
    <>
      <p>Start at: {props.startAt}</p>
      <p>Count By: {props.countBy}</p>
      <h4>{counter}</h4>
    </>
  )
}

Counter.defaultProps = {
  startAt: 0,
  countBy: 1
}

export default Counter;

