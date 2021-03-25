import React, { Component } from 'react'

class PropClass extends Component {
    
    render() {
        return (
            <div>
                propsclass{this.props.name}
            </div>
        )
    }
}

export default PropClass;
