import React, { Component } from 'react'
import ForwardIputRef from './ForwardIputRef'


export class ForwardingRef extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    this.inputRef.current.focus()
  }

	render() {
		return (
			<div>
                <ForwardIputRef ref={this.inputRef} />
        
        <button onClick={this.clickHandler}>Focus Input</button>
			</div>
		)
	}
}

export default ForwardingRef;