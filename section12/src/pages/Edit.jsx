// React
import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import useDiary from "../hooks/useDiary.jsx";

// Component
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";

// Context
import {DiaryDispatchContext} from "../App.jsx";

// CSS
import './css/Edit.css'

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const {onUpdate, onDelete} = useContext(DiaryDispatchContext);
  const currentDiaryItem = useDiary(params.id);

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