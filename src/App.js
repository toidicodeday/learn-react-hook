import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import useFetch from "./hooks/useFetch";
import { Routes, Route } from "react-router-dom";
import User from "./components/User";
import Timer from "./components/Timer";
import Secret from "./components/Secret";

const App = () => {
  let name = "Đức Anh";
  const [todo, setToDo] = useState("");
  const [todos, setToDos] = useState([
    { id: "todo1", title: "Playing game", type: "abc" },
    { id: "todo2", title: "learning reactjs", type: "abc" },
    { id: "todo3", title: "eating", type: "def" },
  ]);

  const handleOnClick = () => {
    if (!todo) {
      alert("you must enter data!!");
      return;
    }
    let newToDo = {
      id: Math.floor(Math.random() * 100000 + 1),
      title: todo,
      type: "def",
    };
    setToDos([...todos, newToDo]);
    setToDo("");
    console.log("===>", todos);
  };

  const handleDeleteEvent = (id) => {
    let newTodos = todos;
    newTodos = newTodos.filter((item) => item.id !== id);
    setToDos(newTodos);
  };

  const {
    data: userList,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello {name} đẹp trai</h2>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <User userList={userList} isLoading={isLoading} isError={isError} />
          }
        />
        <Route path="/timer-app" element={<Timer />} />
        <Route
          path="/todo-app"
          element={
            <Todo
              todos={todos}
              title="All Todos"
              handleDeleteEvent={handleDeleteEvent}
            />
          }
        />
        <Route path="/secret" element={<Secret />} />
      </Routes>
    </div>
  );
};

export default App;
