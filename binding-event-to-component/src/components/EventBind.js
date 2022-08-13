import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message : 'Hello'
        }
        {/*This is 3rd appraocj for event binding  */}
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message : "Good Bye!"
    //     })
    //     console.log(this)
    // }
/*This is 4th appraocj for event binding  */

    clickHandler = () => {
        this.setState ({
            message : "Good Bye!"
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        
        {/*This is 1st approach for event binding :
            <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/*This is 1st approach for event binding :
             <button onClick={() => this.clickHandler()}>Click</button> */}
        
        <button onClick={this.clickHandler}>Click</button>
        <button onClick={this.clickHandler}>Hit Me</button>
      </div>
    )
  }
}

export default EventBind
