import React, { Component } from 'react'

class CondRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin:true
        }
    }
    
    render() {

        return(
// // short circuit operator
            (this.state.isLoggedin) && (<div>welcome render</div>)
            // // conditional terminary operator
                // this.state.isLoggedin ? <div>render</div> : <div>Guest</div>
            // // most of the cases use these to operators they are much more clean and readabul
        )

// // element vatibales

        // let msg
        // if(this.state.isLoggedin){
        //     msg=<div>WelcomeRender</div>
        // }else{
        //     msg=<div>Welcome Guest</div>
        // }
        // return(
        //     <div>Hello: {msg}</div>
        // )

// // if else statement

        // if(this.state.isLoggedin){
        //     return <div>welcome render</div>
        // }
        // else{
        //     return <div>welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <div>welcome Render</div>
        //         <div>welcome Guest</div>
        //     </div>
        // )
    }
}

export default CondRender
