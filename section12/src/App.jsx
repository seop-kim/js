// React
import {Route, Routes, useNavigate} from 'react-router-dom'

// Pages
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

// Component
import Button from "./components/Button";
import Header from "./components/Header";

// CSS
import './App.css'

// Image


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
          <Header title='Header'
                  leftChild={<Button text='Left'/>}
                  rightChild={<Button text='Right'/>}/>
        </div>

        <div>
          <Button text='123'
                  type='DEFAULT'
                  onClick={() => {
                    console.log('123버튼 클릭')
                  }}
          />
          <Button text='123'
                  type='POSITIVE'
                  onClick={() => {
                    console.log('123버튼 클릭')
                  }}
          />
          <Button text='123'
                  type='NEGATIVE'
                  onClick={() => {
                    console.log('123버튼 클릭')
                  }}
          />
        </div>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/new' element={<New/>}></Route>
          <Route path='/diary/:id' element={<Diary/>}></Route>
          <Route path='*' element={<Notfound/>}></Route>
        </Routes>
      </>
  )
}

export default App
