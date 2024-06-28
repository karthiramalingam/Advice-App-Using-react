import {useState} from 'react'
import "../AdviceApp.css";

export const AdviceApp = () => {
    const [advice,setAdvice]=useState("Please Click Button to Get Advice");
    const [count,setCount]=useState(0);
    async function getAdvice(){
    const res=await fetch("https://api.adviceslip.com/advice");
    const data=await res.json();
    setAdvice(data.slip.advice);
    setCount((e)=>e+1);
    }
  return (
    <div>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <p>You have read <b>{count}</b> pieces of advice</p>

    </div>

  )
}
