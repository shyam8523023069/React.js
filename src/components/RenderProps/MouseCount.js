// import React, { Component } from 'react'

//  class MouseCount extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }
//     }
//     counter = () => {
//         this.setState({
//             count : this.state.count + 1
//         })
//     }
     
//     render() {
//         return (
//             <div onMouseOver= {() => this.counter() } >
//                 Mouse over count {this.state.count}
//             </div>
//         )
//     }
// }

// export default MouseCount;


// -------------------------**********************************------------------------------


import React, {Component } from 'react'

 class MouseCount extends Component {
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
            <div onMouseOver= {() => this.counter() } >
                Mouse over count {this.state.count}
            </div>
        )
    }
}

export default MouseCount;

