import React from 'react'
import ClickCounter from './ClickCounter'
import MouseCounter from './MouseCounter'

function HocIndex() {
    return (
        <div>
            <ClickCounter name= 'shyam' />
            <MouseCounter />
        </div>
    )
}

export default HocIndex
