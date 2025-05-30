// React
import {memo, useContext} from 'react'

// Context
import {TodoContext} from '../App';

// CSS
import './TodoItem.css'

const TodoItem = (
    {
      id,
      isDone,
      content,
      date,
    }) => {
  const {onUpdate, onDelete} = useContext(TodoContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  const onClickDelete = () => {
    onDelete(id);
  }

  return (
      <div className='TodoItem'>
        <input onChange={onChangeCheckbox}
               type='checkbox'
               checked={isDone}/>
        <div className='content'>{content}</div>
        <div className='date'>{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDelete}>삭제</button>
      </div>
  )
}

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환 값에 따라 props가 바뀌었는지 판단 (prev : 과거, next : 현재)
//   // true : props가 바뀌지 않음 리렌더링 x
//   // false : props가 바뀜 리렌더링 o
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });

export default memo(TodoItem);