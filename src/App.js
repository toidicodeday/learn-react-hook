import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
    <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello Đức Anh đẹp trai</h2>
      </header>
    </div>
  );
}

export default App;
