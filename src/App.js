import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import useFetch from "./hooks/useFetch";

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
        {/* <Todo todos={todos} title='All Todos' handleDeleteEvent={handleDeleteEvent}/>
         <Todo todos={todos.filter(item => item.type === 'def')} title='DEF Todos' handleDeleteEvent={handleDeleteEvent}/> */}
        {/* <input type='text' value={todo} onChange={(e) => setToDo(e.target.value)}/>
        <button onClick={handleOnClick}>Click me</button> */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>website</th>
            </tr>
          </thead>
          <tbody>
            {isError === false &&
              isLoading === false &&
              userList &&
              userList.length > 0 &&
              userList.map((user) => (
                <tr key={user.id}>
                  <th>{user.name}</th>
                  <th>{user.username}</th>
                  <th>{user.email}</th>
                  <th>{user.phone}</th>
                  <th>{user.website}</th>
                </tr>
              ))}

            {isLoading && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  Loading...
                </td>
              </tr>
            )}

            {isError && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  Something Wrong...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </header>
    </div>
  );
};

export default App;
