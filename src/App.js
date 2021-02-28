import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const persons =['Minhaj', 'sunni', 'hamida', 'limisa', 'lamia', 'sammi', 'joynul', 'samia', 'sharmin', 'nishat', 'nishita'];
  // const person = [{age:23, home: 'deulGram'}, {age:18, home: 'janina'}, ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {
          persons.map(person => <PersonsName name={person} detail={person.age} />)
        }
        
        
        <Counter></Counter>
    
        
      </header>
    </div>
  );
}
function PersonsName(props){
  return(<div>
    <h1>{props.name}</h1>
    <h3>{props.detail}</h3>
  </div>)
  
}

function CountDiffrent(props){
  return (<div>
    <h2>CountDiff:{props.anotherCount}</h2>
  </div>)
}
function Counter(){
  const [count, setCount] = useState(0)
  const handler =() => setCount(count + 1);
  return (<div>
    <h1>Counter:{count}</h1>
    <button onMouseMove={handler}>Increment</button>
    <br/>
    <button onClick={() => setCount(count-1)}>Decrement</button>
    <CountDiffrent anotherCount={count - 100}></CountDiffrent>
  </div>);
}

export default App;
