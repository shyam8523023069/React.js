// import React, { Component } from 'react'

//  class ClassEffect extends Component {
//      constructor(props) {
//          super(props)

//          this.state = {
//               count:0
//          }
//      }

//       // it updates title when it is at initial Rendering
// componentDidMount(){
//     document.title=`clicked ${this.state.count} times`
// }

// // it updates title when the updates any value after initial rendering

// componentDidUpdate(){
//     document.title=`clicked ${this.state.count} times`
// }

// // conditionally run in class

// // componentDidUpdate(prevProps, prevState) {
// //     if (prevState.count === this.state.count ){ 
// //         console.log('Upadating document title')
// //         document.title = `clicked ${this.state.count}times`
// //     }
// // }


//     render() {
//         return (
//             <div>
//             <button onClick={()=>this.setState({count : this.state.count + 1})}>
//                     count value {this.state.count}
//                 </button>
//             </div>
//         )
//     }
// }

// export default ClassEffect;


//-------------------***********************-----------------------------


// import React, {useState, useEffect} from 'react'

// function ClassEffect() {
//     const[count, setCount]= useState(0)


// // the effect hooks lets you perform side effects in functional components
// //runs after every render

//     useEffect(() => 
//     document.title = `clickes ${count} times`
//     )

//     return (
//         <div>
//             <button onClick ={()=>setCount(count + 1) } >click {count} times </button>
//         </div>
//     )
// }

// export default ClassEffect;


//-------------------------------------------------------*****************-----------

// useEffect using condutional run


// import React, {useState, useEffect} from 'react'

// function ClassEffect() {
//     const[count, setCount]= useState(0)
//     const[name, setName]=useState('')

//     useEffect(() => {

//         console.log('useEffect runing')
//         document.title = `clickes ${count} times`
//     } ,[count]   )

//     // in useEffect condutionally run when the [count]  is given
//     // in useEffect if u want run only once the give as [] empty array. it only run on initially render.
//     // using componentdidunmount you can stop heat removeEventListener in useEffect
//     return (
//         <div>
//             <input placeholder='text' 
//             value={name}
//             onChange={e=> setName(e.target.value)} />
//             <button onClick ={()=>setCount(count + 1) } >click {count} times </button>
//             <p>text: {name}</p>
//         </div>
//     )
// }

// export default ClassEffect;


// ---------------------**********************--------------------------------------

import axios from 'axios'
import React, { useState, useEffect } from 'react'

function ClassEffect() {
    const [posts, setPosts] = useState({})
    const [jsonpost, setJsonpost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setJsonpost(res.data)
            })
            .catch(res => { console.log(res) })

    }, [])

    useEffect(() => {
        axios.get('http://192.168.100.145:8082/online-exam/get-random-questions')
            .then(res => {
                console.log(res)
                setPosts(res.data.data)
            })
            .catch(res => { console.log(res) })

    }, [])



    return (
        <div>
            Fetch Data1
            {/* <ol>

                {
                    posts.map(item => <li>{item.question} </li>)
                }
            </ol> */}

            <div> {posts.question} </div>
            <br />
            <ul>

                {
                    jsonpost.map(item => <li key={item.id} >{item.title} </li>)
                }
            </ul>

        </div>
    )
}

export default ClassEffect;

