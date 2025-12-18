
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { BuyDress } from './reducer';

// const App = () => {
//     const numOfDress=useSelector(state=>state.numOfDress)
//     const dispatch=useDispatch();

//   return (
//     <div>
//       <h2>Number of Dress:{numOfDress}</h2>
//       <button onClick={()=>dispatch(BuyDress())}> Buy Dress</button>
//     </div>
//   )
// }

// export default App
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/actions/counterActions';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
