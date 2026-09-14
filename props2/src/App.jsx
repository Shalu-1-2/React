import React from 'react'
import { useState } from 'react'

const App = () => {

    let[count,setCount]= useState(0)
 
    function demo(){
        setCount(count++)
    }
    function demo1(){
        setCount(count--)
    }


  return (
    <>
      <h1>Count :- {count}</h1>
      <button onClick={demo}>+</button> <br /> <br />
      <button onClick={demo1}>-</button>
    </>
  )
}

export default App