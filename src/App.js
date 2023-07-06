import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';

const App = () => {
  let name = 'Đức Anh';
  const [todo, setToDo] = useState('');
  const [todos, setToDos] = useState([
    {id: 'todo1', title: 'Playing game'},
    {id: 'todo2', title: 'learning reactjs'},
    {id: 'todo3', title: 'eating'}
  ]);

  const handleOnClick = () =>{
    let newToDo = {id: 'abc', title: todo}
    setToDos([...todos, newToDo])
    setToDo('')
    console.log("===>", todos)
  }

  return (
    <div className="App">
    <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello {name} đẹp trai</h2>
        {todos.map((item, index)=>(
          <li key={item.id}>{item.title}</li>
        ))}
        <input type='text' value={todo} onChange={(e) => setToDo(e.target.value)}/>
        <button onClick={handleOnClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
