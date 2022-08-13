import React from 'react'

const GreetDestruct = props => {
    //This is how we destructuer props to individual variable
    const{name, gender} = props
  return (
    <div>
      <h1>This is {name}, he is {gender}.</h1>
      {props.children}
    </div>
  )
}

export default GreetDestruct
