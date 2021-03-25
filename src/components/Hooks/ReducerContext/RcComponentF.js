import React, {useContext} from 'react'
import { CountContext } from './RcComponentApp';

function RcComponentF() {
    const countrs = useContext(CountContext)
    return (
        <div>
            rcComponent F- {countrs.countState}
            <button onClick={() => countrs.dispatchState('increment5') }  >increment5</button>
            <button onClick={() => countrs.dispatchState('decrement5') } >decrement5</button>
            <button onClick={() => countrs.dispatchState('reset') }>reset</button>
        </div>
    )
}

export default RcComponentF;
