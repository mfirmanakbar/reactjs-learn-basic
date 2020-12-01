import React from 'react'

function Person({person}) {
    return (
        <div>
            <h4>I am {person.name}, {person.age} years old.</h4>
        </div>
    )
}

export default Person