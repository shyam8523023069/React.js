import React, { Component } from 'react'

 class ChildComp extends Component {
    render() {
        return (
            <div>
                <button onClick={()=> this.props.ChildProps('child')} >click</button>
            </div>
        )
    }
}

export default  ChildComp;