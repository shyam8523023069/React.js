import React, { Component } from 'react'
import MemoComp from './MemoComp'
// import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'


class ParentComp extends Component {
// class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'mani'
        }
       
    }

componentDidMount(){
    setInterval(()=>{
        this.setState({
            name:'shyam'
        })
    },2000)
}
    
    render() {
        console.log('parentcomp : '+ this.state.name)
        return (
            <div>
                parentComponent
                
                {/* <RegComp names={this.state.name} />
                <PureComp names={this.state.name} /> */}
                <MemoComp names={this.state.name} />
            </div>
        )
    }
}

export default ParentComp;
