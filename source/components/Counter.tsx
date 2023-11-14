import React from 'react'
import {useState} from 'react'
import style from "./Counter.module.scss";

const Counter = () => {
    const [count, setCount] = useState(0)
    const inc = ()=>{
        setCount(count+1)
    }
  return (
    <div>
        <div>{count}</div>
        <button className={style.button} onClick={()=>inc()}>increment</button>
    </div>
  )
}

export default Counter