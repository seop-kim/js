// React
import {useContext, useMemo, useState} from 'react'
import usePageTitle from "../hooks/usePageTitle.jsx";

// Component
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";

// Context
import {DiaryStateContext} from "../App";

// CSS
import './css/Home.css'

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
      pivotDate.getFullYear(),
      pivotDate.getMonth(),
      1,
      0,
      0,
      0).getTime();

  const endTime = new Date(
      pivotDate.getFullYear(),
      pivotDate.getMonth() + 1,
      0,
      23,
      59,
      59).getTime();

  return data.filter((item) => {
    return item.createdDate >= beginTime && item.createdDate <= endTime;
  });
};

const Home = () => {
  usePageTitle('나의 감정일기')
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = useMemo(() => {
    return getMonthlyData(pivotDate, data);
  }, [pivotDate, data]);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  }

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  }

  return (
      <div>
        <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                leftChild={<Button text={'<'} onClick={onDecreaseMonth}/>}
                rightChild={<Button text={'>'} onClick={onIncreaseMonth}/>}
        />
        <DiaryList data={monthlyData}/>
      </div>
  );
}

export default Home;