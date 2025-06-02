// React
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";

// Component
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";

// Context
import {DiaryDispatchContext, DiaryStateContext} from "../App.jsx";

// CSS
import './Edit.css'

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const {onUpdate, onDelete} = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState(null);

  const onClickDelete = () => {
    if (!window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요.')) return;

    onDelete(params.id)
    nav('/', {replace: true});
  };

  const onSubmit = (input) => {
    if (!window.confirm('일기를 정말 수정할까요?')) return;

    onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
    nav('/', {replace: true});
  }

  useEffect(() => {
    const currentItem = data.find((item) => Number(item.id) === Number(params.id));

    if (!currentItem) {
      window.alert('존재하지 않는 일기입니다.')
      nav('/', {replace: true});
    }

    setCurrentDiaryItem(currentItem);
  }, [params.id]);

  return (
      <div>
        <Header title={'일기 수정하기'}
                leftChild={<Button text={'< 뒤로 가기'} onClick={() => nav(-1)}/>}
                rightChild={<Button text={'삭제하기'} type={'NEGATIVE'} onClick={onClickDelete}/>}
        />
        <Editor initData={currentDiaryItem} onSubmit={onSubmit}/>
      </div>
  );
};

export default Edit;