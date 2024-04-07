import React from 'react'

export default function App() {

  import { createStore } from "redux";
  const initialCount = {
    count: 100,
  };
  const BUY_COUNTER = "BUY_COUNTER";
  function counterApplication() {
    return {
      type: BUY_COUNTER,
    };
  }

  const reducer = (state = initialCount, action) => {
    switch (action.type) {
      case BUY_COUNTER: {
        return {
          count: state.count - 2,
        };
      }
      default: {
        return state;
      }
    }
  };
  const store = createStore(reducer);
  console.log("initialcount:", store.getState());
  const unSubscribe = store.subscribe(() => {
    console.log("finalcount:", store.getState());
  });

  console.log(store.dispatch(counterApplication()));
  console.log(store.dispatch(counterApplication()));
  console.log(store.dispatch(counterApplication()));
  console.log(store.dispatch(counterApplication()));
  unSubscribe();
  return (
    <div>
      <h1>counter : {store.getState()}</h1>
      <button onClick={()=>store.dispatch(counterApplication())}>click</button>
    </div>
  );
}
