import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState({})
    // useEffect( ()=>{
    //     fetch('https://api.github.com/users/Tim-arp')
    //     .then( (res)=>res.json())
    //     .then( (data)=> setData(data) )
    // },[] )
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-3'>Github Followers: {data.followers}</div>
    <img className='' width={300} src={data.avatar_url} alt="Git profile" />
    </>
)
}

export default Github
export const githubInfoLoader = async()=>{
 const response = await fetch('https://api.github.com/users/Tim-arp')
   return response.json()
}