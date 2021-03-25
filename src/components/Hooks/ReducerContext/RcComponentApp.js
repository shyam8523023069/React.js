import React, {useContext, useReducer} from 'react'
import RcComponentA from './RcComponentA'
import RcComponentB from './RcComponentB'
import RcComponentC from './RcComponentC'

export const CountContext=React.createContext()
const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment' : return state + 1;
        case 'decrement' : return state - 1;
        case 'increment5' : return state + 5;
        case 'decrement5' : return state - 5;
        case 'reset' : return initialState;
        default : return state
    } 
}

function RcComponentApp() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <CountContext.Provider value = {{countState : count, dispatchState: dispatch}}>
            CountValue-: {count}
           <RcComponentA />
           <RcComponentB />
           <RcComponentC />
            </CountContext.Provider>
        </div>
    )
}

export default RcComponentApp;
