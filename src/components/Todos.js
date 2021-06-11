import React, { Fragment, useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from 'uuid';

const Todos = () => {
  const [todosState, setTodosState] = useState([
    {
      id: uuidv4(),
      title: "Todo 1",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Todo 2",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Todo 3",
      completed: false,
    },
  ]);

  const markComplete = (id) => {
    const newTodos = todosState.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });

    setTodosState(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todosState.filter((todo) => {
      return todo.id !== id;
    });
    setTodosState(newTodos);
  };

  const addTodo = title => {
     const newTodos = [...todosState, {
        id: uuidv4(),
        title,
        completed: false
     }]
     setTodosState(newTodos)
  }

  return (
    <Fragment>
      <AddTodo addTodoFunc = {addTodo}/>
      {todosState.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todoProps={todo}
            markCompleteFunc={markComplete}
            deleteTodoFunc={deleteTodo}
          />
        );
      })}
    </Fragment>
  );
};

export default Todos;
