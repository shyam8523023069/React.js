// import React, { Component } from 'react'

// class MouseCounter extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count:0
//         }
//     }
//     counter(){
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
    
//     render() {
//         return (
//             <h1 onMouseOver={()=>this.counter()} >
//                 Mouse hover counter Component : {this.state.count}
                
//             </h1>
//         )
//     }
// }

// export default MouseCounter;


// -----------------------***************--------------------


import React, { Component } from 'react'
import HocCompo from './HocCompo'


class MouseCounter extends Component {
   
    render() {
        return (
            <h1 onMouseOver={this.props.Incounter} >
                 Mouse hover counter Component : {this.props.Incount}
                
            </h1>
        )
    }
}

export default HocCompo(MouseCounter, 9 );