// import { useEffect, useState } from "react"
import React,{useEffect,useState} from 'react'

const Github = () => {
    const[data,setData] = useState(null);
    useEffect(()=>{
        fetch('https://api.github.com/users/octocat')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
{data && data.followers !== undefined ? (
                <p>Github followers: {data.followers}</p>
            ) : (
                <p>No data available</p>
            )}
      
    </div>
  )
}

export default Github
