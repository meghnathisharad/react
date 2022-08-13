import React, { Component } from 'react'

class ClassComponentClick extends Component {
    clickHandler(){
        console.log("Button hammered!!")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Hit me!</button>        
      </div>
    )
  }
}

export default ClassComponentClick
