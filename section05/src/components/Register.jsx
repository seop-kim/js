// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개
import {useRef, useState} from 'react'

const Register = () => {

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();



  console.log('input : ', input);
  const onChange = (e) => {
    countRef.current++;
    console.log('count : ', countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    if (input.name === '') {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  }

  return (
      <div>
        <div>
          <input
              ref={inputRef}
              name={'name'}
              value={input.name}
              onChange={onChange}
              placeholder={"이름"}
          />
        </div>

        <div>
          <input
              name={'birth'}
              type={"date"}
              value={input.birth}
              onChange={onChange}
          />
        </div>

        <div>
          <select
              name={'country'}
              value={input.country}
              onChange={onChange}
          >
            <option value={''}></option>
            <option value={'kr'}>한국</option>
            <option value={'us'}>미국</option>
            <option value={'uk'}>영국</option>
          </select>
        </div>

        <div>
          <textarea
              name={'bio'}
              value={input.bio}
              onChange={onChange}
              placeholder={"자기소개"}
          />
        </div>
        <button onClick={onSubmit}>제출</button>
      </div>
  )
}

export default Register