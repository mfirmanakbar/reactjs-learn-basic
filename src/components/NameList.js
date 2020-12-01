import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana']

    // return (
    //     <div>
    //         <p>{ names[2] }</p>
    //         {
    //             names.map(name => <p>{name}</p>)
    //         }
    //     </div>
    // )

    // const nameLists = names.map(it => <div>{it}</div>)
    // return <div>{nameLists}</div>

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: '28',
        },
        {
            id: 2,
            name: 'Diana',
            age: '25',
        }
    ]
    
    // const personList = persons.map(person => (<div>I am {person.name}, {person.age} years old.</div>))
    // return <div>{personList}</div>

    const personList = persons.map(person => <Person person={person} />)
    return <div>{personList}</div>
}

export default NameList
