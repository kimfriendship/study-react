import React from "react";
import classNames from "classnames/bind";
import style from "./App.css";
import Todos from "./Todos";

const st = classNames.bind(style);

const CategoryLists = ({
  title,
  todos,
  changeTodo,
  createTodo,
  todoInputs,
  deleteTodos,
}) => {
  return (
    <div className={st("todosWrapper")}>
      <h3 className={st("todosTitle")}>{title}</h3>
      <button className={st("deleteTodosBtn")} onClick={deleteTodos}>
        x
      </button>
      <ul className={st("todo")}>
        <Todos todos={todos.filter((todo) => todo.title === title)} />
      </ul>
      <input
        className={st("inputTodo")}
        type="text"
        onChange={changeTodo}
        onKeyUp={createTodo}
        value={todoInputs}
      />
    </div>
  );
};

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
    <>
      {category.map(({ title }) => (
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
      ))}
    </>
  );
};

export default Category;
