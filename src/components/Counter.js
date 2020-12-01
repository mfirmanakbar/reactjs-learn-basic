// setState

// type "rce" then Enter magic using lib es7

import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment() {
        //DO LIKE THIS, dont modified state value without setState
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log(this.state.count) //it will printer (n-1) because setState is Async

        // WITH CALLBACK
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Using Callback', this.state.count)
        // })
        // console.log('Without Callback', this.state.count)

        //WITH Arguments if want to running incrementFive
        this.setState((prevState, props) => ({
            //count: prevState.count + props.addValue // if you need value from props
            count: prevState.count + 1
        }))
        console.log('Without Callback', this.state.count)
    }
    
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>COUNT - { this.state.count }</div>
                {/* <button onClick={() => this.increment()}>Increment</button> */}
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter

