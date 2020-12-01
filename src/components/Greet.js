// FUNCTIONAL COMPONENTS

import React from 'react'

//(x) Manual Syntax 
// function Greet() {
//     return <h1>Hello Firman!</h1>
// }

// ES6 Syntax and Arrow Function. 
// with Export it should -> import { Greet } from './components/Greet'
// not -> import Greet from './components/Greet'
// export const Greet = () => <h1>Functional Component example</h1>

//return <h4>Hello { props.name } a.k.a { props.heroName }. (Functional Component example)</h4>
//props.name = "FIRMAN" --> props CAN NOT CHANGE IT, READ ONLY
// export const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h4>Hello { props.name } a.k.a { props.heroName }. (Functional Component example)</h4>
//             { props.children }
//         </div>
//     )
// }

//DESTRUCTURING
export const Greet = props => {
    const { name, heroName } = props
    return (
        <div>
            <h4>Hello { name } a.k.a { heroName }. (Functional Component example)</h4>
        </div>
    )
}

//(x) if we call different as component -> import MyComponent from './components/Greet'
// export default Greet 