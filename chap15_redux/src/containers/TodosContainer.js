import React, { useCallback } from "react";
import Todos from "../components/Todos";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";

const TodosContainer = () => {
  const { todos } = useSelector((state) => ({ todos: state.todos }));
  const dispatch = useDispatch();

  const onCreate = useCallback((item) => dispatch(addTodo(item)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default TodosContainer;
