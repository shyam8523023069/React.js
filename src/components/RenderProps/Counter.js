// import React, { Component } from 'react'

// class counter extends Component {
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
//             <div>
//                 counter Value : {this.state.count}
//                 <button onClick = {() => this.counter() } >click</button>
//             </div>
//         )
//     }
// }

// export default counter;

// ---------------------------------------*******************************-----------------------------

// using render props


import React, { Component } from 'react'

class counter extends Component {
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
                counter Value : {this.state.count}
                <button onClick = {() => this.counter() } >click</button>
            </div>
        )
    }
}

export default counter;