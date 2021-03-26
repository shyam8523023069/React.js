// import React, { Component } from 'react'

//  class ClickCounter extends Component {
//      constructor(props) {
//          super(props)
     
//          this.state = {
//               count:0
//          }
//      }

//      counter(){
//          this.setState({
//              count:this.state.count + 1
//          })
//      }
     
//     render() {
//         return (
//             <div>
//                 ClickCounter component {this.state.count}
//                 <button onClick={()=>this.counter()} >count</button>
//             </div>
//         )
//     }
// }

// export default ClickCounter;



// ---------------------************************-------------------------------------


import React, { Component } from 'react';
import HocCompo from './HocCompo'

 class ClickCounter extends Component {
    
     
   
    render() {
   const {Incount, Incounter} = this.props
        return (
            
            <div>
                <p>
                {this.props.name } ClickCounter component {Incount}
                    </p>
                <button onClick={Incounter} >count</button>
            </div>
            
        )
    }
}

export default HocCompo(ClickCounter, 21);
