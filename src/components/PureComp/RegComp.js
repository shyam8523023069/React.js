import React, { Component } from 'react'

class RegComp extends Component {
    
    render() {
        console.log('Regular component')
        return (
            <div>
                regular {this.props.names}
            </div>
        )
    }
}

export default RegComp;
