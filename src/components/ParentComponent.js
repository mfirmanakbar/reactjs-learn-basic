import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`) // `` from es6
    }

    render() {
        return (
            <div>
                {/* greetHandler is attribut */}
                <ChildComponent greetHandler={this.greetParent} /> 
            </div>
        )
    }
}

export default ParentComponent
