import React from 'react'
import Counter from './Counter'
import MouseCount from './MouseCount'
import UserLogin from './UserLogin'


function RendIndex() {
    return (
        <div>
            {/* <Counter /> */}
            {/* <MouseCount /> */}
            <UserLogin render = {(isLoggedin) => isLoggedin ? 'shyam' :  'manideep' } />
        </div>
    )
}

export default RendIndex;
