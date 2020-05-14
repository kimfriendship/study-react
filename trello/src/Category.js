import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "./App.css";
import Todos from "./Todos";

const st = classNames.bind(style);

const CategoryLists = React.memo(
  ({ board, todos, createTodo, deleteTodos }) => {
    const [inputState, setInputState] = useState("");
    const changeInput = (e) => {
      setInputState(e.target.value);
    };

    return (
      <div className={st("todosWrapper")}>
        <h3 className={st("todosTitle")}>{board.title}</h3>
        <button className={st("deleteTodosBtn")} onClick={deleteTodos}>
          x
        </button>
        <ul className={st("todo")}>
          {/* <Todos todos={todos.filter((todo) => todo.title === title)} /> */}

          {/* 보드 안의 todo는 보드(우정님 코드로 치면 cateogory)의 key와 매칭을 시켜야 어떤 보드의 투두인지 알 수 있습니다
        그래서 App.js 가보시면 todo에 카테고리 key값을 parentId라 하려 어떤 보드의 todo인지 매칭을 시켜줬습니다
        또한, 그랬기 때문에 새로운 todo를 생성하실 때도 보드의 key를 parentId로 주셔야 합니다 */}
          <Todos todos={todos.filter((todo) => todo.parentId === board.key)} />
        </ul>
        {/* <input
        className={st("inputTodo")}
        type="text"
        onChange={changeTodo}
        onKeyUp={createTodo}
        value={todoInputs}
      /> */}
        <input
          className={st("inputTodo")}
          type="text"
          onChange={changeInput}
          onKeyUp={(e) => {
            createTodo(e, board.key, inputState);
            if (e.key === "Enter") setInputState("");
          }}
          value={inputState}
        />
      </div>
    );
  }
);

const Category = ({
  category,
  todos,
  boardInputs,
  changeTitle,
  changeTodo,
  createTodo,
  todoInputs,
  deleteTodos,
}) => {
  return (
    <div className={st("todosBox")}>
      {/* {category.map(({ title }) => (
        <CategoryLists
          title={title}
          todos={todos}
          boardInputs={boardInputs}
          changeInputs={changeTitle}
          changeTodo={changeTodo}
          createTodo={createTodo}
          todoInputs={todoInputs}
          deleteTodos={deleteTodos}
        />
      ))} */}
      {/* 카테고리를 반복 돌리시는거 보니 보드라고 판단이 됩니다. 그래서 map함수가 반복문 돌 때마다 보드 데이터를 하나씩 뱉게 수정했습니다 . 그리고 밑에 
        카테고리 리스트의 title이 보드 데이터같은데 맞겠죠? ㅎㅎ 조금 수정해봤습니다
      */}
      {category.map((board) => (
        <CategoryLists
          key={board.key}
          board={board}
          todos={todos}
          boardInputs={boardInputs}
          changeInputs={changeTitle}
          changeTodo={changeTodo}
          createTodo={createTodo}
          todoInputs={todoInputs}
          deleteTodos={deleteTodos}
        />
      ))}
    </div>
  );
};

export default React.memo(Category);
