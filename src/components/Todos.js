import React, {Fragment, useState} from 'react'
import TodoItem from './TodoItem'

const Todos = () => {
   const [todosState, setTodosState] = useState([
      {
         title: "Todo 1",
         completed: false
      },
      {
         title: "Todo 2",
         completed: false
      },
      {
         title: "Todo 3",
         completed: false
      }
   ])
   
   return (
      <Fragment>
       {todosState.map(todo => {
           return <TodoItem todoProps={todo}/>
       })}
      </Fragment>
   )
}

export default Todos