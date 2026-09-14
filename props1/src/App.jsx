import React from 'react'
import MyCard from './Components/MyCard'

const App = () => {

  let data =[
    {id:1,price:20,image:"/image/c3.jpeg"},
    {id:2,price:40,image:"/image/c3.jpeg"},
  ]
  return (
    <>
    <MyCard  data={data}/>
    </>
  )
}

export default App