// import React, { Component } from 'react'
// import InputRef from './InputRef';

// class FocusInput extends Component {
//   constructor(props) {
//     super(props)
//     this.componentRef = React.createRef()
//   }

//   clickHandler = () => {
//     console.log(this.componentRef.current)
//     this.componentRef.current.focusInput()
//   }

//   render() {
//     return (
//       <div>
//         <InputRef ref={this.componentRef}></InputRef>
//         <button onClick={this.clickHandler}>Focus Input</button>
//       </div>
//     )
//   }
// }

// export default FocusInput