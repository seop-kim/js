// React
import {useRef, useState} from 'react'

// Component
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List.jsx";

// CSS
import './App.css'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    data: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    data: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래 연습하기',
    data: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      data: new Date().getTime(),
    }

    setTodos([...todos, newTodo]);
  }

  return (
      <div className="App">
        <Header/>
        <Editor onCreate={onCreate}/>
        <List/>
      </div>
  )
}

export default App
