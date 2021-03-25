import React, {useContext} from 'react'
import { CountContext } from './RcComponentApp';



function RcComponentD() {
    const counter = useContext(CountContext)
    return (
        <div>
            RcComponent D - {counter.countState}
            <button onClick={() => counter.dispatchState('increment') } >increment1</button>
            <button onClick={() => counter.dispatchState('decrement') } >decrement1</button>
            <button onClick={() => counter.dispatchState('reset') } >reset</button>
        </div>
    )
}

export default RcComponentD;
