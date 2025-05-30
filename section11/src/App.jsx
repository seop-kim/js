// React
import {createContext, useCallback, useMemo, useReducer, useRef} from 'react'

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

function reducer(state, action) {
  if (action.type === 'CREATE') return [...state, action.data];
  if (action.type === 'UPDATE') return state.map((item) => item.id === action.targetId ? {
    ...item,
    isDone: !item.isDone
  } : item);
  if (action.type === 'DELETE') return state.filter((item) => item.id !== action.targetId);
  return state;
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // todo 생성 리스너
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  // todo checkbox 수정 리스너
  // useCallback mount 시 1회만 객체를 생성
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  }, []);

  // todo 삭제 리스너
  // useCallback mount 시 1회만 객체를 생성
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return {onCreate, onUpdate, onDelete};
  }, [onCreate, onDelete, onUpdate]);

  return (
      <div className="App">
        <Header/>
        <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={memoizedDispatch}>
            <Editor/>
            <List/>
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
  )
}

export default App
