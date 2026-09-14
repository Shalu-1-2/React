import React from 'react'
import MyButton from './Components/MyButton'

const App = () => {

  function handleClick(){
    alert("Hello")
  }

  function handleClick1(){
    alert("Hello 1")
  }

  function handleClick2(){
    alert("Hello 2")
  }
  return (

    <>
    <h1>App page</h1>
    <MyButton text="click"  ved={handleClick}/> <br /><br />
    <MyButton text="click1"  ved={handleClick1}/> <br /><br />
    <MyButton text="click2"  ved={handleClick2}/> <br /><br />
    </>
  )
}

export default App