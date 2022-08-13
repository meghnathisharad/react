import React from 'react'


const FunctionClick = () => {
    const clickHandler = () => {
        console.log("Button clicked!!")
    }
  return (
    //Event handler is a function and not a function call. Hence it should be clickHandler and not clickHandler()
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
