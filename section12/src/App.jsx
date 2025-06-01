// React
import {Route, Routes} from 'react-router-dom'
import {createContext, useReducer, useRef} from 'react'

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
    createdDate: new Date("2025-06-01").getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    id: 2,
    createdDate: new Date("2025-06-03").getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
  {
    id: 3,
    createdDate: new Date("2025-05-27").getTime(),
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

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  // TODO : create
  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current,
        createdDate: createDate,
        emotionId: emotionId,
        content: content,
      },
    });
  };

  // TODO : update
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      id: {
        id: id,
        createdDate: createDate,
        emotionId: emotionId,
        content: content,
      },
    });
  };

  // TODO : delete
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      data: {
        id: id
      },
    });
  };

  return (
      <>
        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
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
