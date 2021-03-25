import React, { Component } from 'react'
import ChildComp from './ChildComp'

 class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'parent'
        }
        this.ChildParent=this.ChildParent.bind(this)
    }

    ChildParent(propchild){
        
            alert(`hello ${this.state.name} from ${propchild} `)
       
    }
    
    render() {
        return (
            <div>
                <ChildComp ChildProps={this.ChildParent} />
            </div>
        )
    }
}

export default ParentComp;