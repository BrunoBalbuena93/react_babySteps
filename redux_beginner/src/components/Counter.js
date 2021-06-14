import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const increment = () => {
    // Here we would be using the redux function
    // dispatch({ type: "increment", amount: 1 });
    // Here we will use the toolkit
    dispatch(counterActions.increment(1));
  };
  const decrement = () => {
    // dispatch({ type: "decrement", amount: 1 });
    dispatch(counterActions.decrement());
  };
  const increase = () => {
    // dispatch({ type: "increment", amount: 5 });
    dispatch(counterActions.increment(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={increase}>Increment by 5</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
