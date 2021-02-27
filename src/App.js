import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter></Counter>
        <Users></Users>

      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0)
  const handler =() => setCount(count + 1);
  return (<div>
    <h1>Counter:{count}</h1>
    <button onMouseMove={handler}>Increment</button>
    <br/>
    <button onClick={() => setCount(count-1)}>Decrement</button>
  </div>);
}

function Users(){
  const [users, setUser] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  return (<div>
    <h1>Available Users : {users.length};</h1>
    <ol>
      {
        users.map(user => <li>{user.email}</li>)
      }
    </ol>
  </div>);
}
export default App;
