// // useState Hooks 

// import React, { useState } from 'react'

// function Count() {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             <h1> count Vaule: {count}</h1>
//             <button onClick={() => setCount(count + 1)} >
//                 click to increase
//             </button>
            
//         </div>
//     )
// }

// export default Count;

// -----------------------------------------------------------*************------------------------
// // // useState Hooks previousValue

// import React, {useState} from 'react'

// function Count() {
//     const initialstate =0
//     const [count, setCount]= useState(initialstate)

//    const previousvalue =  ()=>{
//         for(let i=0; i<5; i++){
//             setCount( previoustate => previoustate + 1 )
//         }
//     }

//     return (
//         <div>
//             <button onClick={()=>setCount(initialstate)} >initialstate {count} </button>
//             <button onClick={ ()=> setCount( count + 1 )} > incerment {count} </button>
//             <button onClick={()=>setCount( previoustate => previoustate - 1 )} > decerment {count} </button>
//             <button onClick={previousvalue} >previousValue {count}</button>
//         </div>
//     )
// }

// export default Count;

// -----------------------------------------------------------*************------------------------


// // useState Hooks using Objects

// import React, {useState} from 'react'

// function Setstate() {
// const [name, setName]=useState({firstName:"", lastName:""})

//     return (
//         <div>
//             <input placeholder="first Name" 
//             value={name.firstName}
//             onChange={e => setName({...name, firstName: e.target.value})} />
//             <input placeholder="last Name"
//             value={name.lastName}
//             onChange={e => setName({...name, lastName: e.target.value })} />
//             <p>firstName: {name.firstName} </p>
//             <p>lastName: {name.lastName} </p>
//             <p>FullName: {JSON.stringify(name.lastName)} </p>
//             <p>FullName: {JSON.stringify(name.firstName)} </p>
//             <p> {JSON.stringify(name)} </p>
//         </div>
//     )
// }

// export default Setstate;

// -----------------------------------------------------------*************------------------------


// // useState Hooks using Array

// import React, {useState} from 'react'

// function Setstate() {
// const [count, setCount]= useState([])

// const addNumber = () => {
//     setCount([
//         ...count, {
//             id: count.length,
//             value: Math.floor(Math.random()*10)+1
//         }
//     ])
// }

//     return (
//         <div>
//            <button onClick={addNumber}>add the value</button> 
//             <ul>
//                 {count.map(item => <li key={item.id} >Id : {item.id}-----Value : {item.value} </li> )}
//             </ul>
//         </div>
//     )
// }

// export default Setstate;



