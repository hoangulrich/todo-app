import React, {Fragment, useState} from 'react'
import TodoItem from './TodoItem'

const Todos = () => {
   const [todosState, setTodosState] = useState([
      {
         id: 1,
         title: "Todo 1",
         completed: false
      },
      {
         id: 2,
         title: "Todo 2",
         completed: false
      },
      {
         id: 3,
         title: "Todo 3",
         completed: false
      }
   ])
   
   const markComplete = id => {
      const newTodos = todosState.map(todo => {
         if (todo.id === id) todo.completed = !todo.completed
         return todo
      })

      setTodosState(newTodos)
   }

   return (
      <Fragment>
       {todosState.map(todo => {
           return <TodoItem todoProps={todo} markCompleteFunc = {markComplete}/>
       })}
      </Fragment>
   )
}

export default Todos