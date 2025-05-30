// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다.
/**
 * ex
 *   if(true){
 *     const state = useState(0);
 *   }
 */
// 3. custom hook을 직접 만들 수 있다.
import useInput from "./../hooks/HookExam";

const HookExam = () => {
  const [input, onChange] = useInput();

  return (
      <div>
        <input
            value={input}
            onChange={onChange}
        />
      </div>
  );
}

export default HookExam