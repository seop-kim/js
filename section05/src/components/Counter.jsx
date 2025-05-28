import {useState} from 'react'


const Counter = () => {
  const [count, setCount] = useState(0);
  const countButtonFunc = () => {
    setCount(count + 1);
  }

  return (
      <div>
        <h1>{count}</h1>
        <button onClick={countButtonFunc}>+</button>
      </div>
  )
}

export default Counter