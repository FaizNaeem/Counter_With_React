import React,{useState} from 'react'
import './counter.css'

export default function Counter() {
    let [counter ,setcounter] =useState("0")
    function plus(){
        setcounter(Number(counter)+1);
        // let hello = Number
        // console.log(hello);
    }

    function minus(){
        setcounter(Number(counter)-1);
    }
    function reset(){
        setcounter("0");
       }
  return (
    <div className='center'>
        <div className='border'>

    <div>
    <input type="text" name="" id="" value={counter} placeholder='0' />
    </div>
    <div>
        <button className='btn btn-success m-3' onClick={plus}>+</button>
        <button className='btn btn-secondary m-3' onClick={minus}>-</button>
        <button className='btn btn-danger m-3' onClick={reset}>Reset</button>
    </div>
        </div>

        </div>
    
  )
};
