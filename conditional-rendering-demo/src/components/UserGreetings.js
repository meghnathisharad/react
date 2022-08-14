import React, { Component } from 'react'

class UserGreetings extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
  render() {

    //Short circuit operator If..ElseNothing
    return this.state.isLoggedIn && <div>Welcome Sharad!</div>
    //Ternary operator
    //return this.state.isLoggedIn ? (<div>Welcome Sharad!</div>) : (<div>Welcome User!</div>)

    //If..Else condition using javascript element
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Sharad!</div>
    // } else {
    //     message = <div>Welcome User!</div>
    // }
    // return (message)

//If..Else condition

    // if(this.state.isLoggedIn) {
    //     return (
    //         <div>Welcome Sharad.</div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <div>Welcome user.</div>
    //     </div>
    //     )
    // }
  }
}

export default UserGreetings
