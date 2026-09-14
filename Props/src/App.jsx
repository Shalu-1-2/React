import React from 'react'
import MyButton from './Components/MyButton'
import MyCard from './Components/MyCard'
const App = () => {
  let firstName = "shalu"
  let lastName = "kushwaha"
  let age = 20
  let course = "IT"
  return (
    <>
    
      <MyButton data={firstName} data1={lastName}/> <br /><br />
      <MyCard age={age} course={course} />
    </>
  )
}

export default App