import React ,{useState,useEffect,useReducer}from 'react'
import axios from 'axios';
export default function DataFetching() {
    const[loading,setLoading]= useState(true);
    const[error,setErr]= useState('');

    const[Post,setPost]= useState({});

    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=> {
            setLoading(false)
            setPost(response.data)
            setErr('');
        })
        .catch(error=>{
            setLoading(false)
            setPost({})
            setErr('Something went wrong!!');
        })
    },[])

    return (
        <div>
            {loading?'Loading': Post.title}
            {error?error:null}
        </div>
    )
}
