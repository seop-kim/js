import "./App.css"
import Viewer from "./commpnents/Viewer";
import Controller from "./commpnents/Controller";
import Even from "./commpnents/Even";
import {useEffect, useRef, useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMounted = useRef(false);

  // 마운트 : 탄생
  useEffect(() => {
    console.log('mount');
  }, []);


  // 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    console.log('update');
  });

  // 언마운트 죽음


  const onClickButton = (value) => {
    setCount(count + value);
  }
  return (
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <input type="text" value={input} onChange={(e) => {
            setInput(e.target.value)
          }}/>
        </section>
        <section>
          <Viewer count={count}/>
          {count % 2 === 0 ? <Even/> : null}
        </section>

        <section>
          <Controller onClickButton={onClickButton}/>
        </section>
      </div>
  )
}

export default App
