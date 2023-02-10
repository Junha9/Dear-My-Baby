import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ todoItem, todoList, setTodoList }) => {
  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      // id 값이 같은 항목의 checked 값을 Toggle 함
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));

    setTodoList(nextTodoList);
  };

  return (
    <li className="todoapp__item">
      {/* 아이템 완료 체크 / 체크 해제를 위한 체크박스 */}
      <input
        type="checkbox"
        className="todoapp__item-checkbox"
        checked={todoItem.checked} // (1)
        onChange={onChangeCheckbox} // (2)
      />
      {/* 아이템 내용 */}
      <span className="todoapp__item-ctx">{todoItem.text}</span>
      {/* 수정 버튼 */}
      <button type="button" className="todoapp__item-edit-btn">
        ✏
      </button>
      {/* 삭제 버튼 */}
      <button type="button" className="todoapp__item-delete-btn">
        🗑
      </button>
    </li>
  );
};

ToDoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
  }),
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default ToDoItem;
