import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* without assign params */}
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

            {/* assign params */}
            <button onClick={() => props.greetHandler('i am child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
