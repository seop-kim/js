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
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래 연습하기',
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  // todo 생성 리스너
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }

    setTodos([...todos, newTodo]);
  };

  // todo checkbox 수정 리스너
  const onUpdate = (targetId) => {
    // todos state 값 중 id와 일치하는 아이템의 isDone 변경
    setTodos(todos.map((todo) => todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo));
  };

  // todo 삭제 리스너
  const onDelete = (targetId) => {
    // 인수 : todos 배열에서 targetId 가 일치하는 id 만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
      <div className="App">
        <Header/>
        <Editor onCreate={onCreate}/>
        <List todos={todos}
              onUpdate={onUpdate}
              onDelete={onDelete}/>
      </div>
  )
}

export default App
