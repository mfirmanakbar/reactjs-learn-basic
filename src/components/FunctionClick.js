// shortcut rfce

import React from 'react'

function FunctionClick() {
    function clickHandler() {
        alert('button clicked from FunctionClick')
    }
    return (
        <div>
            <button onClick={ clickHandler }>Function Click</button>
        </div>
    )
}

export default FunctionClick
