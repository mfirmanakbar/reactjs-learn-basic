// shortcut rce

import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler() {
        alert('button clicked from ClickHandler')
    }

    render() {
        return (
            <div>
                <button onClick={ this.clickHandler }>Class Click</button>
            </div>
        )
    }
}

export default ClassClick
