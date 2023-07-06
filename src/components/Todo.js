import React from 'react';

const Todo = (props) =>{
    const todos = props.todos;
  return (
    <div>
       {todos.map((item, index)=>(
          <li key={item.id}>{item.title}</li>
        ))}
    </div>
  );
}

export default Todo;
