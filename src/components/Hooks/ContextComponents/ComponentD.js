import React from 'react'
import {UserContext} from './ComponentA';

function ComponentD() {
    return (
        <div>
            <UserContext.Consumer>
            {
                user => {
                    return <div>Component A to Component D passing prop value : {user} </div>
                }
            }
            </UserContext.Consumer>
            
        </div>
    )
}

export default ComponentD;   



//----------------------------*******************-----------------------------
// using useContex Hooks concept

import React, {useContext} from 'react';
import {UserContext} from './ComponentA';



function ComponentD() {
    const User = useContext(UserContext)
    return (
        <div>
            useContext using Hooks : {User}
        </div>
    )
}

export default ComponentD;


