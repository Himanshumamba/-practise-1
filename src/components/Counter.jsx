import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from '../features/counter/counterSlice';
import { useState } from 'react';
const Counter = () => {
  const counting = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState();

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p> {counting}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <label> Enter the amount</label>{' '}
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => dispatch(setIncrementAmount(e.target.value))}
      />
      <button onClick={() => dispatch(incrementByAmount(addValue))}>
        Add Amount
      </button>
      <button onClick={() => resetAll()}>Reset</button>
    </section>
  );
};

export default Counter;
