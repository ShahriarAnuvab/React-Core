import { useState } from 'react'
import './App.css'
import Team from './Team';
import Users from '../Users';
import Friends from './Friends';
function App() {
  const [count, setCount] = useState(0);
  // console.log(abc)
  const alertBtn = ()=>{
    alert('You clicked Alert')
  }
  function confirmtBtn(){
    confirm('Are You Sure?')
  }
  const addFive =(num)=>{
    alert(num + 5)
  }
  const add=()=>{
    const newCount = count + 1;
    setCount(newCount);

  }
  const reduce=()=>{
    const newCount = count - 1;
    setCount(newCount);

  }

  return (
    <>
    <h1>React Core Part 2</h1>

    <Friends></Friends>
    <Users></Users>
    <Team></Team>
    <div style={{
      border: '2px solid red',
      padding: '5px',
      marginBottom: '5px'
    }}>
    <h1 >Counter: {count} </h1>
    <button onClick={add}>Add</button>
    <button onClick={reduce}>Reduce</button>
    </div>

      <button onClick={alertBtn}>Alert</button>
      <button onClick={confirmtBtn}>Confirm</button>
      <button onClick={()=> prompt('Enter Your Name')}>Prompot</button>
      <button onClick={() => addFive(5)}>Button with parameter add 5+5</button>
     
    </>
  )
}

export default App
