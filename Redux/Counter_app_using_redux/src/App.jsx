import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/feature/counterReducer'

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div className='App'>
      <h1>Counter App using Redux</h1>
      <h3>Count: {count}</h3>
      <button onClick = {() => dispatch(increment())}>
        Increment
      </button>

      <button onClick = {() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  )
}

export default App
