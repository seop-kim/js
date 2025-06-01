// Component
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";

// CSS
import './Home.css'

const Home = () => {
  return (
      <div>
        <Header title='2024년 2월'
                leftChild={<Button text={'<'}/>}
                rightChild={<Button text={'>'}/>}
        />
        <DiaryList/>
      </div>
  );
}

export default Home;