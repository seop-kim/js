// React
import {useNavigate, useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary.jsx";

// Component
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";

// CSS
import './Diary.css'

// Util
import {getStringedDate} from "../util/get-stringed-date.js";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩중...</div>
  }

  const {createdDate, emotionId, content} = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
      <div>
        <Header
            title={`${title} 기록`}
            leftChild={<Button text={'< 뒤로 가기'} onClick={() => nav(-1)}/>}
            rightChild={<Button text={'수정하기'} onClick={() => nav(`/edit/${params.id}`)}/>}
        />
        <Viewer emotionId={emotionId} content={content}/>
      </div>
  );
}

export default Diary;