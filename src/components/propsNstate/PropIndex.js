import React from 'react'
import ParentComp from './ParentChildNcp/ParentComp'
import PropClass from './PropClass'
import PropFunction from './PropFunction'
import StateClass from './StateClass'


//Props are immutable 
//Immutable an object which can't accepts changes but it creats new object 

function PropIndex() {
    return (
        <div>
            {/* <PropFunction name ="shyam" />
            <PropFunction name ="manideep" />
            <h3>hello welcome</h3>
            <PropClass name = "shyam" />
            <PropClass name= "manideep" /> */}
            {/* <StateClass /> */}
            <ParentComp />
        </div>
    )
}

export default PropIndex;
