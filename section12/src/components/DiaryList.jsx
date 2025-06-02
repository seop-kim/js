// React
import {useState} from 'react';
import {useNavigate} from "react-router-dom";

// Component
import Button from "./Button";
import DiaryItem from "./DiaryItem";

// CSS
import './css/DiaryList.css'

const DiaryList = ({data}) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState('latest');

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === 'latest') {
        return Number(b.createdDate - a.createdDate);
      } else {
        return Number(a.createdDate - b.createdDate);
      }
    });
  };

  const sortedData = getSortedData();

  return (
      <div className='DiaryList'>
        <div className='menu_bar'>
          <select onChange={onChangeSortType}>
            <option value='latest'>최신순</option>
            <option value='oldest'>오래된 순</option>
          </select>
          <Button text='새 일기 쓰기'
                  type={'POSITIVE'}
                  onClick={() => nav('/new')}></Button>
        </div>

        <div className='list_wrapper'>
          {sortedData.map((item) => {
            return <DiaryItem key={item.id} {...item}/>
          })}
        </div>
      </div>
  )
}

export default DiaryList;