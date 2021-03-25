import React, {useContext} from 'react'
import { CountContext } from './RcComponentApp'

function RcComponentA() {
    const count = useContext(CountContext)
    return (
        <div>
            RcComponent A - {count.countState}
            
                <button onClick={() => count.dispatchState('increment') } >increment</button>
                <button onClick={() => count.dispatchState('decrement') } > decrement</button>
                <button onClick={() => count.dispatchState('reset') } >reset</button>
        </div>
    )
}

export default RcComponentA;
