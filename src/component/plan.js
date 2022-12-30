import React, { useState } from 'react'
import './plan.css';

export default function Plan() {
    const [inputList , setInputList] = useState("");
    const [list , setList] = useState([]);
    const todayEvent =(event)=>{
        setInputList(event.target.value)
    }
    const add =()=>{
        setList((oldList)=>{
            return[...oldList, inputList]
        });
        setInputList(" ");  
    }
     
  return (
    <div className='main_div'>
 <div className='center_div'>
        <br/>
        <h1>Importents Work for Today</h1>
        <br/>
        <input   type='text' placeholder='Write Here' autoComplete='off' onChange={todayEvent} value={inputList} />
        <button onClick={add}>+</button>

    <ol>
        { list.map((listnew,index)=>{
            return (
                <li>{index+1}. {listnew}</li>
            )
        })}
    </ol>
    
    </div>
    </div>
    
  )
}
