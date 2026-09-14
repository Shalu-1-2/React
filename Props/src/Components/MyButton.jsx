import React from 'react'

const MyButton = (a) => {
    console.log(a);
  return (
    <>
        <h1>First name:- {a.data}</h1>
        <h1>Last name:- {a.data1}</h1>
    </>
  )
}

export default MyButton