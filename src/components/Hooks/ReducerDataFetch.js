// import axios from 'axios'
// import React, {useState, useEffect} from 'react'

// function ReducerDataFetch() {
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState('')
//     const [post, setPost] = useState({})

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts/1')
//         .then(response =>{

//             setLoading(false)
//             setPost(response.data)
//             console.log(response.data)
//             setError('')
//         })
//         .catch(error => {
//             setLoading(false)
//             setPost({})
//             setError("loading error")
//         })
        
//     },[] )
//     return (
//         <div>
//             {loading ? 'loading' : post.title}
//             {error ? error : null}
//         </div>
//     )
// }

// export default ReducerDataFetch;



// ---------------------------------------------------**************************--------------------

//

// import React, {useReducer, useEffect} from 'react'
// import axios from 'axios';

// const initialPost = {
//     loading: true,
//     posts:{},
//     error: ''
// }
// const reducer=(state, action)
// function ReducerDataFetch() {
//     const [post, dispatch]= useReducer(reducer, initialPost)
//     return (
//         <div>
//             data
//         </div>
//     )
// }

// export default ReducerDataFetch;

