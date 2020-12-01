// CLASS COMPONENTS

import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        //return <h4>Class Component example</h4>
        //return <h4>Welcome { this.props.name } a.k.a { this.props.heroName }. (Class Component example)</h4>

        //DESTRUCTURING
        const { name, heroName } = this.props
        //const { state1, state2} = this.state
        return <h4>Welcome { name } a.k.a { heroName }. (Class Component example)</h4>
    }
}

export default Welcome