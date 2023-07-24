import { useSelector, useDispatch } from 'react-redux'

import { selectCounterValue, decrement, increment, incrementByAmount } from './counterSlice'

const Counter = () => {
  const counterValue = useSelector(selectCounterValue)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(10))
  }

  return (
    <div>
      <p>Counter: {counterValue}</p>
      <button onClick={handleIncrement}>[+]</button>
      <button onClick={handleDecrement}>[-]</button>
      <button onClick={handleIncrementByAmount}>[+10]</button>
    </div>
  )
}

export default Counter
