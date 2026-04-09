import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, getDoubleCounter,} from "./counterSlice.js";

export default function Counter() {
  const counter = useSelector((state) => state.counter);

  const doubleCounter = useSelector(getDoubleCounter);
  const trippleCounter = useSelector((state) => state.counter * 3);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>

      <h1>Double Counter: {doubleCounter}</h1>
      <h1> Triple Counter: {trippleCounter}</h1>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => dispatch(increment(2))}>
        Increment +2
      </button>

      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => dispatch(decrement(2))}>
        Decrement -2
      </button>
    </div>
  );
}