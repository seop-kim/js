// React
import {Link, Route, Routes, useNavigate} from 'react-router-dom'

// Component
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

// CSS
import './App.css'

// 1. 모든 일기를 조회하는 home
// 2. 새로운 일기를 생성하는 /New
// 3. 일기를 상세 조회하는 /Diary
function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav('/new')
  };

  return (
      <>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/new'>New</Link>
          <Link to='/diary'>Diary</Link>
        </div>
        <button onClick={onClickButton}>New 페이지로 이동</button>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/new' element={<New/>}></Route>
          <Route path='/diary' element={<Diary/>}></Route>
          <Route path='*' element={<Notfound/>}></Route>
        </Routes>
      </>
  )
}

export default App
