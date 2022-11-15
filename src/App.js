// import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const App = () => {

  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount ((preValue) => {
      return preValue + 1;
      
    })
    
  }

  const handleDecrease = () => {
     setCount((preValue) => {
      return preValue -1;
    })

  }
  
  return (
    <>
  
    <h1>{count}</h1>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handleDecrease}>Decrease</button>

    </>

   
  );
};

export default App;