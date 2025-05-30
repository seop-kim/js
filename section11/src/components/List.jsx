// React
import {useContext, useMemo, useState} from 'react'

// Context
import {TodoContext} from '../App';

// CSS
import './List.css'

// Component
import TodoItem from "./TodoItem.jsx";


const List = () => {
  const {todos} = useContext(TodoContext);
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

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

  const {totalCount, doneCount, notDoneCount} = useMemo(() => {
    console.log('sea');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    }
  }, [todos]);


  return (
      <div className='List'>
        <h4>Todo List 🌱</h4>
        <div>
          <div>totalCount : {totalCount}</div>
          <div>doneCount : {doneCount}</div>
          <div>notDoneCount : {notDoneCount}</div>
        </div>
        <input placeholder={'검색어를 입력하세요'}
               value={search}
               onChange={onChangeSearch}/>
        <div className='todos_wrapper'>
          {filteredTodos.map((todo) => {
            return (
                <TodoItem key={todo.id} {...todo}/>
            )
          })}
        </div>
      </div>
  );
}

export default List;