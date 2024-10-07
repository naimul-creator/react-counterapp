import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount, reset } from "../features/counterSlice";
import { decrement } from "../features/counterSlice";

const CounterViue = () => {
  const counter = useSelector((state) => state.counter.count); 
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter app</h1>
      <h2>Count: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>increment by amount</button>
    </>
  );
};

export default CounterViue;
