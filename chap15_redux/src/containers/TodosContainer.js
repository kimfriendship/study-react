import React, { useCallback } from "react";
import Todos from "../components/Todos";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";

const TodosContainer = ({ todos, addTodo, toggleTodo }) => {
  const onCreate = useCallback((text) => addTodo(text), [addTodo]);
  const onToggle = useCallback((id) => toggleTodo(id), [toggleTodo]);

  return (
    <div>
      <Todos onCreate={onCreate} onToggle={onToggle} todos={todos} />
    </div>
  );
};

const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
