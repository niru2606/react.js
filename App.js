import React, { useState } from "react";
import './index.css';


function App() {
  const [weight, setWeight]=useState(0);
  const [height, setHeight]=useState(0);
  const [bmi, setbmi]=useState('');
  const [message, setMessage]=useState('');
  let calcBmi=(e)=>
    {
      e.preventDefault()
      if(weight===0 || height===0)
        {
          alert("please enter valid height and weight");
        }
        else
        {
          let bmi=(weight/(height * height)*703)
          setbmi(bmi.toFixed(1))
          if(bmi<25)
            {
              setMessage('you are under weight')
            }
            else if(bmi>=25 && bmi<30)
              {
                setMessage('you are healthy')
              } 
              else
              {
                setMessage('you are overweight')
              }
        } 
    }
   let reload =()=>
    {
      window.location.reload();
    }
    
  return (
    <div className="app">
    <div className="container">
      <h2>BMI CALCULATOR</h2>
      <form  onSubmit={calcBmi}>
        <div>
          <label>weight (kg)</label>
          <input type="text" placeholder="enter weight value" value={weight} onChange={(e)=> setWeight(e.target.value)} />
        </div>
        <div>
          <label>height (cm)</label>
          <input type="text" placeholder="enter height value" value={height} onChange={(e)=> setHeight(e.target.value)}/>
        </div>
        <div>
          <button className="btn" type="submit">submit</button>
          <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
        </div>
        </form>
        <div className="center">
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>
    </div>
    </div>
  )

}

export default App;
