import './App.css';
// react 에서는 확장자를 작성하지 않아도 된다.
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Component:
// 1. 보통 함수의 이름을 따서 만든다.
// 2. 컴포넌트명 첫 글자는 대문자
// 3. App component를 보통 root component 라고 한다. (App이 관례다.)

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}

export default App
