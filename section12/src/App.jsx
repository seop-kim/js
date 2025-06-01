// React
import {Route, Routes} from 'react-router-dom'
import {createContext, useCallback, useMemo, useReducer, useRef} from 'react'

// Pages
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

// Component
// import Button from "./components/Button";
// import Header from "./components/Header";
// CSS
import './App.css'

// Image


const mockData = [
  {
    id: 1,
    createdData: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    id: 2,
    createdData: new Date().getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
  {
    id: 3,
    createdData: new Date().getTime(),
    emotionId: 3,
    content: '3번 일기 내용',
  },
]

function reducer(state, action) {
  if (action.type === 'CREATE') return [...state, action.data];
  if (action.type === 'UPDATE') return state.map((item) => Number(item.id) === Number(action.data.id) ? action.data : item);
  if (action.type === 'DELETE') return state.filter((item) => Number(item.id) !== Number(action.data.id));
  return state;
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  // TODO : create
  const onCreate = useCallback((createDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current,
        createdData: createDate,
        emotionId: emotionId,
        content: content,
      },
    });
  });

  // TODO : update
  const onUpdate = useCallback((id, createDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      id: {
        id: id,
        createdData: createDate,
        emotionId: emotionId,
        content: content,
      },
    });
  });

  // TODO : delete
  const onDelete = useCallback((id) => {
    dispatch({
      type: 'DELETE',
      data: {
        id: id
      },
    });
  });

  const memoizedDispatch = useMemo(() => {
    return {onCreate, onUpdate, onDelete};
  }, [onCreate, onDelete, onUpdate]);

  return (
      <>
        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider value={memoizedDispatch}>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/new' element={<New/>}></Route>
              <Route path='/diary/:id' element={<Diary/>}></Route>
              <Route path='/edit/:id' element={<Edit/>}></Route>
              <Route path='*' element={<Notfound/>}></Route>
            </Routes>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
      </>
  );
}

export default App
