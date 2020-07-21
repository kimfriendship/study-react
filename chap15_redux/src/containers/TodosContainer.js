import React from "react";
import Todos from "../components/Todos";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";

const TodosContainer = () => {
  const { todos } = useSelector((state) => ({ todos: state.todos }));
  const dispatch = useDispatch();

  const onCreate = (item) => dispatch(addTodo(item));
  const onToggle = (id) => dispatch(toggleTodo(id));

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default TodosContainer;
