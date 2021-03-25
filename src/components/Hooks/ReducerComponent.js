// // useReducer simple

// import React, { useReducer } from 'react'

// const initialvalue = 0
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialvalue
//         default:
//             return state
//     }
// }

// function ReducerComponent() {
//     const [count, dispatch] = useReducer(reducer, initialvalue)
//     return (
//         <div>
//             useReducer : {count}
//         <button onClick= {() => dispatch('increment') } >increment</button>
//         <button onClick = {() => dispatch('decrement') } >decrement</button>
//         <button onClick = {() => dispatch('reset') } >reset</button>

//         </div>
//     )
// }

// export default ReducerComponent;


// ----------------------*************************-------------------------------------

// useReducer complex state and action


// import React, {useReducer} from 'react'

// const initialstate={
//     firstcountvalue : 0,
// secondcountvalue : 1
// }

// const reducer = (state, action) => {
//     switch(action.type){
//         case 'increment' : return { ...state,  firstcountvalue : state.firstcountvalue + action.value};
//         case 'decrement' : return { ...state, firstcountvalue : state.firstcountvalue - action.value};
//         case 'increment2' : return { ...state, secondcountvalue : state.secondcountvalue + action.value};
//         case 'decrement2' : return { ...state, secondcountvalue : state.secondcountvalue - action.value};
//         case 'reset' : return initialstate;
//         default : return state
//     }
// }

// function ReducerComponent() {
//     const [count, dispatch] = useReducer(reducer, initialstate)
//     return (
//         <div>
//             firstCount- : {count.firstcountvalue}
//             secondCount- : {count.secondcountvalue}
//         <button onClick= {()=> dispatch({type: 'increment' , value: 1}) }  >increment</button>
//         <button onClick= {() => dispatch({type: 'decrement', value: 1}) } >decrement</button>
//         <button onClick= {()=> dispatch({type: 'increment' , value: 5}) }  >increment 5</button>
//         <button onClick= {() => dispatch({type: 'decrement', value: 5}) } >decrement -5</button>
//         <button onClick= {()=> dispatch({type: 'increment2' , value: 1}) }  >increment</button>
//         <button onClick= {() => dispatch({type: 'decrement2', value: 1}) } >decrement</button>
//         <button onClick={() => dispatch({type: 'reset'})}>reset</button>

//         </div>
//     )
// }

// export default ReducerComponent;


// -------------------------------------------------********************------------------------------

// useReducer using MUltiple with same reducer function

import React, {useReducer} from 'react'

const initialstate = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment' : return state + 1;
        case 'decrement' : return state - 1;
        case 'reset' : return initialstate
    }
}

function ReducerComponent() {
    const [count, dispatch] = useReducer(reducer, initialstate)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialstate)
    return (
        <div>
            multiple Count-: {count}
            
            <button onClick= {() => dispatch('increment') } >increment</button>
            <button onClick={() => dispatch('decrement') } >decrement</button>
            <button onClick={() => dispatch('reset') } >reset</button>
            multiple CountTwo-: {countTwo}
            <button onClick= {() => dispatchTwo('increment') } >increment</button>
            <button onClick={() => dispatchTwo('decrement') } >decrement</button>
            <button onClick={() => dispatchTwo('reset') } >reset</button>
        </div>
    )
}

export default ReducerComponent;



