import React from "react";

const Todo = (props) => {
  const { todos, title, handleDeleteEvent } = props;

  const handleDelete = (id) => {
    console.log("===>ID: ", id);
    handleDeleteEvent(id);
  };
  return (
    <div>
      <div>{title}</div>
      {todos.map((item, index) => (
        <div key={item.id}>
          <li>
            {item.title}
            &nbsp; &nbsp;
            <span onClick={() => handleDelete(item.id)}>X</span>
          </li>
        </div>
      ))}
    </div>
  );
};

export default Todo;
