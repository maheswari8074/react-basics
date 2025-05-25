import { useState } from 'react'//hook comes frm here
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //useState  responsble for changes in the state(value updt) in dom
let [counter,setCounter]=useState(15)
// [var,method_controlsvar]
  // let counter = 15

  const addValue = () =>{

   
       console.log("clicked",counter);
        counter= counter+1
       setCounter(counter)
  }

  const removeValue = () =>{
    if(counter<=0)counter=0;
    else{
    setCounter(counter-1);
    }
  }
  return (
    <>
      
     <h1>Counter project -learn</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick ={addValue}>Add value{counter}</button>
     <br />
     <button onClick={removeValue}>remove value{counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

//to update vars -in UI React controls it

export default App
