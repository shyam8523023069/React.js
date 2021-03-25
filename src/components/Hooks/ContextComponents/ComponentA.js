import React from 'react'
import ComponentB from './ComponentB'

export const UserContext = React.createContext()

function ComponentA() {
    return (
        <div>
            <UserContext.Provider value={'Passing props'}>
            <ComponentB />
            </UserContext.Provider>
            
            
        </div>
    )
}

export default ComponentA;  
