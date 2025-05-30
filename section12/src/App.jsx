// React
import {Route, Routes} from 'react-router-dom'
import {useReducer, useRef} from 'react'

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
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const refId = useRef(4);

  return (
      <>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/new' element={<New/>}></Route>
          <Route path='/diary/:id' element={<Diary/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
          <Route path='*' element={<Notfound/>}></Route>
        </Routes>
      </>
  )
}

export default App
