import React, { Component } from 'react'

class RenderLogic extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    counter = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {
        
        return (
            <div>
                {
                    this.props.render(this.state.count , this.counter)
                }
                
            </div>
        )
    }
}

export default RenderLogic;
