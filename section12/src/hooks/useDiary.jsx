// React
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";

// Context
import {DiaryStateContext} from "../App.jsx";

const useDiary = (id) => {
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState(null);

  useEffect(() => {
    const currentItem = data.find((item) => Number(item.id) === Number(id));

    if (!currentItem) {
      window.alert('존재하지 않는 일기입니다.')
      nav('/', {replace: true});
    }

    setCurrentDiaryItem(currentItem);
  }, [id]);

  return currentDiaryItem;
};

export default useDiary;