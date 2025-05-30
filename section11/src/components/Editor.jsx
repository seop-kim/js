// React
import {useContext, useRef, useState} from 'react'

// Context
import {TodoContext} from '../App';

// CSS
import './Editor.css'

const Editor = () => {
  const {onCreate} = useContext(TodoContext);
  const [content, setContent] = useState('');
  const contentRef = useRef(null);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return
    }

    onCreate(content);
    setContent('');
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) { // enter
      onSubmit();
    }
  }

  return (
      <div className='Editor'>
        <input
            value={content}
            ref={contentRef}
            placeholder='새로운 Todo...'
            onKeyDown={onKeyDown}
            onChange={onChangeContent}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
  )
}

export default Editor;