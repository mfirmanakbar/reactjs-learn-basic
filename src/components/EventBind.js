//rce
import React, { Component } from 'react'

class EventBind extends Component {

    // rconst
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        {/* for running third way */}
        this.clickHandlerCons = this.clickHandler.bind(this) 
    }
    
    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
    }

    clickHandlerArrow = () => {
        this.setState({
            message: 'Goodbye! clickHandlerArrow'
        })
    }
    
    render() {
        return (
            <div>
                <div>{ this.state.message }</div>
                {/* first way */}
                <button onClick={this.clickHandler.bind(this)}>Cilck EventBind 1</button>
               
                {/* second way - arraw function*/}
                <button onClick={() => this.clickHandler()}>Cilck EventBind 2</button>

                {/* Best approach */}
                {/* third way - binding on the constractors*/}
                <button onClick={this.clickHandlerCons}>Cilck EventBind 3</button>

                {/* fourth way - binding arrow functions*/}
                <button onClick={this.clickHandlerArrow}>Cilck EventBind 3</button>
            </div>
        )
    }
}

export default EventBind
