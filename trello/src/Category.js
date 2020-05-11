import React from "react";
import classNames from "classnames/bind";
import style from "./App.css";
import Todos from "./Todos";

const st = classNames.bind(style);

const CategoryLists = ({ title, todos }) => {
  return (
    <div className={st("todosWrapper")}>
      <h3 className={st("todosTitle")}>{title}</h3>
      <button className={st("deleteTodosBtn")}>x</button>
      <ul className={st("todo")}>
        <Todos todos={todos} />
      </ul>
      <input className={st("inputTodo")} type="text" />
    </div>
  );
};

const Category = ({ category, todos }) => {
  return (
    <>
      {category.map((title) => (
        <CategoryLists title={title} todos={todos} />
      ))}
    </>
  );
};

export default Category;
