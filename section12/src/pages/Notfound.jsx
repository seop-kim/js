// React
import {Link} from 'react-router-dom'

// CSS
import './Notfound.css';

const Notfound = () => {
  return (
      <div className="notfound-container">
        <h1 className="notfound-code">404</h1>
        <p className="notfound-message">페이지를 찾을 수 없습니다.</p>
        <p className="notfound-description">
          요청하신 경로가 잘못되었거나 존재하지 않는 페이지입니다.
        </p>
        <Link to="/" className="notfound-link">홈으로 돌아가기</Link>
      </div>
  );
};

export default Notfound;