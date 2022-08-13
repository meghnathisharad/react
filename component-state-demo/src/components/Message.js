import React, {Component} from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message : "Welcome user"
        }

    }
    changeMessage() {
        this.setState({
            message : "Thanks for subscribing!"
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message} 
                </h1>
                <button onClick={() => this.changeMessage()}>Subscribe me.</button>
            </div>
        )
    }

}

export default Message