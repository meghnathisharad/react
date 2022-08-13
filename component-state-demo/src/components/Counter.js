import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    click(){
        //Count value shoud be changes only inside setState method or it will not re-render on the UI
        //setState method is an asynchronous call hence if you want to use the counter after value change 
        //use it in the callback function which is 2nd peramater in the setState method

        // this.setState({
        //     count : this.state.count + 1
        // }, () => {console.log("Callback value : ",this.state.counts)})

        this.setState((prevState) => ({
            count : prevState.count + 1
        }),() => {console.log("Callback value : ", this.state.count)})
    }
    
    //In clickFive, click method called 5 time which should set the count to 5 but it is 1 only.
    // This is due to React make this call in bunch in single run to improve performance
    //To avoid this make a function call inside setState method
    clickFive(){
        this.click()
        this.click()
        this.click()
        this.click()
        this.click()
    }
  render() {
    return (
      <div>
        <h1>Counter : {this.state.count}</h1>
        <button onClick={() => this.clickFive()}>Hit me!</button>
      </div>
    )
  }
}

export default Counter
