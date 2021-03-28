import React from 'react'
import Counter from './Counter'
import MouseCount from './MouseCount'
import RenderLogic from './RenderLogic'
import UserLogin from './UserLogin'


function RendIndex() {
    return (
        <div>
            {/* <Counter /> */}
            {/* <MouseCount /> */}
            {/* <UserLogin render = {(isLoggedin) => isLoggedin ? 'shyam' :  'manideep' } /> */}
            <RenderLogic render= {(count, counter) => ( <Counter count={count} counter ={counter} /> ) }  />
            <RenderLogic render={(count, counter ) => ( <MouseCount count ={count} counter={counter} /> ) }  />
        </div>
    )
}

export default RendIndex;
