// React
import {useState} from 'react'

// CSS
import './List.css'

// Component
import TodoItem from "./TodoItem.jsx";

const List = ({todos}) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilteredData = () => {
    if (search === '') {
      return todos
    }

    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase())
    });
  };

  // 검색 필터 데이터
  const filteredTodos = getFilteredData();

  return (
      <div className='List'>
        <h4>Todo List 🌱</h4>
        <input placeholder={'검색어를 입력하세요'}
               value={search}
               onChange={onChangeSearch}/>
        <div className='todos_wrapper'>
          {filteredTodos.map((todo) => {
            return <TodoItem key={todo.id} {...todo}/>
          })}
        </div>
      </div>
  );
}

export default List;