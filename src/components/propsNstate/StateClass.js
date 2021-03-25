import React, { Component } from 'react'

class StateClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Shyam',
             button:'Start'
        }
    }

     changeName  () { 
        this.setState({
            name:'welcome shyam',
            button:'Back'
        }) 
    } 
    
    render() {
        return (
            <div>
                state Name : {this.state.name}
                <button onClick ={() => this.changeName() }  > {this.state.button} </button>
            </div>
        )
    }
}

export default StateClass;
