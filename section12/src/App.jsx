// React
import {Route, Routes} from 'react-router-dom'
import {createContext, useEffect, useReducer, useRef, useState} from 'react'

// Pages
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

// CSS
import './App.css'

function reducer(state, action) {
  let nextState;
  if (action.type === 'INIT') return action.data;
  if (action.type === 'CREATE') nextState = [...state, action.data];
  if (action.type === 'UPDATE') nextState = state.map((item) => Number(item.id) === Number(action.data.id) ? action.data : item);
  if (action.type === 'DELETE') nextState = state.filter((item) => Number(item.id) !== Number(action.data.id));
  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  // LocalStorage
  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);

    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) maxId = Number(item.id);
    })
    idRef.current = maxId + 1;

    dispatch({
      type: 'INIT',
      data: parsedData,
    });

    setIsLoading(false);
  }, [])

  // func create
  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate: createDate,
        emotionId: emotionId,
        content: content,
      },
    });
  };

  // func update
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id: id,
        createdDate: createDate,
        emotionId: emotionId,
        content: content,
      },
    });
  };

  // func delete
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      data: {
        id: id
      },
    });
  };

  if (isLoading) {
    return <div>데이터 로딩중입니다...</div>
  }

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
