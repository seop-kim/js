// React
import {useState} from 'react';
import {useNavigate} from "react-router-dom";

// Component
import EmotionItem from "./EmotionItem";

// CSS
import './Editor.css'
import Button from "./Button.jsx";

const emotionList = [
  {
    emotionId: 1,
    emotionName: '완전 좋음',
  },
  {
    emotionId: 2,
    emotionName: '좋음',
  },
  {
    emotionId: 3,
    emotionName: '그럭저럭',
  },
  {
    emotionId: 4,
    emotionName: '나쁨',
  },
  {
    emotionId: 5,
    emotionName: '끔찍함',
  },
];
const inputDefault = {
  createdDate: new Date(),
  emotionId: 3,
  content: '',
}

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;
  return `${year}-${month}-${date}`;
};

const Editor = ({onSubmit}) => {
  const [input, setInput] = useState(inputDefault);
  const nav = useNavigate();

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // valid & convert date type
    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };
  const onClickSubmitButton = () => {
    onSubmit(input);
  }

  return (
      <div className='Editor'>
        <section className='date_section'>
          <h4>오늘의 날짜</h4>
          <input type='date'
                 name='createdDate'
                 onChange={onChangeInput}
                 value={getStringedDate(input.createdDate)}
          />
        </section>

        <section className='emotion_section'>
          <h4>오늘의 감정</h4>
          <div className='emotion_list_wrapper'>
            {emotionList.map((item) => {
              return (
                  <EmotionItem
                      onClick={() => onChangeInput({
                        target: {
                          name: 'emotionId',
                          value: item.emotionId,
                        }
                      })}
                      key={item.emotionId} {...item}
                      isSelected={input.emotionId === item.emotionId}
                  />);
            })}
          </div>
        </section>

        <section className='content_section'>
          <h4>오늘의 일기</h4>
          <textarea
              placeholder='오늘은 어땠나요?'
              name='content'
              value={input.content}
              onChange={onChangeInput}
          />
        </section>

        <section className='button_section'>
          <Button text={'취소하기'} onClick={() => nav(-1)}/>
          <Button text={'작성완료'} type={'POSITIVE'} onClick={onClickSubmitButton}/>
        </section>
      </div>
  )
};

export default Editor;