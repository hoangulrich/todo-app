import React from 'react'

const TodoItem = props => {
    const todo = props.todoProps
    
    //css
    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todo.completed ? 'line-through' : 'none'
    }

    const deleteButtonStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }

    //return
    return (
        <p style = {todoItemStyle}> 
           <input type="checkbox"/>
           {todo.title}
           <button style={deleteButtonStyle}>Delete</button>
        </p>
    )
}

export default TodoItem