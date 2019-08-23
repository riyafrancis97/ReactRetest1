import React from 'react'

export default class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            number: 10
        }

     
    }

    handleEvent = () => {
        this.setState({
        number: this.state.number + 1
    })
    }

    handleMinusEvent = () => {
        this.setState({
        number: this.state.number - 1
    })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleEvent}>+</button> &nbsp; &nbsp;
                {this.state.number} &nbsp; &nbsp;
                <button onClick={this.handleMinusEvent}>-</button>
              
            </div>
        )
    }

}