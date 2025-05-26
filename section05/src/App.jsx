import './App.css';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0);
  const countButtonFunc = () => {
    setCount(count + 1);
  }

  const [light, setLight] = useState("OFF");
  const lightButtonFunc = () => {
    setLight(light === "OFF" ? "ON" : "OFF");
  }

  return (
      <>
        <div>
          <h1>{light}</h1>
          <button onClick={lightButtonFunc}>{light === 'ON' ? '끄기' : '켜기'}</button>
        </div>

        <div>
          <h1>{count}</h1>
          <button onClick={countButtonFunc}>+</button>
        </div>
      </>
  );
}

export default App
