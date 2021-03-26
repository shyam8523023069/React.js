import React from 'react'

// function ForwardIputRef() {
//   return (
//     <div>
//       <input type="text"></input>
//     </div>
//   )
// }

const ForwardIputRef = React.forwardRef((props, ref) => {
	return (
		<div>
      <input type="text" ref={ref} />
		</div>
	)
})

export default ForwardIputRef;