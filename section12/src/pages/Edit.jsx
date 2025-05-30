// React
import {useParams} from "react-router-dom";

// CSS
import './Edit.css'

const Edit = () => {
  const params = useParams();
  return <h1>{params.id}번 일기 수정페이지</h1>;
};

export default Edit;