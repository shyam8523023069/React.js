// import React, { Component } from 'react'

// class ListMap extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             names :['ram', 'shyam' , 'ganesh']
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                {
//                    this.state.names.map(name => <div> {name} </div>)
//                }
//             </div>
//         )
//     }
// }

// export default ListMap;


// ---------------------------**********************------------------------

// import React from 'react'

// function ListMap() {
//     const names =["shyam", "ram", "uday"]
//     const data = names.map(name => <div>{name}</div>)
//     return (
//         <div>
//             {data}
//             {/* {
//                 names.map(name => <div>{name} </div> )
//             } */}
//         </div>
//     )
// }

// export default ListMap;


// ---------------------------------------***********************************-------------------

import React from 'react'
import PersonData from './PersonData';

function ListMap() {
    const Person = [
        {
            name:'shyam',
            age:'24',
            work:'soft Engg'
        },
        {
            name:'ram',
            age:'23',
            work:'data science'
        },
        {
            name:'uday',
            age:'23',
            work:'Inst Engg'
        } ]

        const printdata = Person.map(data => <PersonData data={data} /> )

    return (
        <div>
            {printdata}
            {/* {
                Person.map(data => 
                <div> My Name : {data.name} haveing : {data.age} Years old and doing {data.work} </div> )
            } */}
        </div>
    )
}

export default ListMap;

