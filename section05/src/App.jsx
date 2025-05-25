import './App.css';
// react 에서는 확장자를 작성하지 않아도 된다.
import Header from './components/Header';
import Button from './components/Button';

// Component:
// 1. 보통 함수의 이름을 따서 만든다.
// 2. 컴포넌트명 첫 글자는 대문자
// 3. App component를 보통 root component 라고 한다. (App이 관례다.)

function App() {

  const buttonProps = {
    text: '메일',
    color: 'red',
    a: 1,
    b: 2,
    c: 3,
  }

  // return 에서 컴포넌트 내부에 다른 컴포넌트나 html 등을 전달할 수 있다.
  // 받는 컴포넌트 측에서는 children 이라는 props로 받는다.
  return (
      <>
        <Button {...buttonProps}/>
        <Button text={"카페"}/>
        <Button text={"블로그"}>
          <Header/>
        </Button>
      </>
  );
}

export default App
