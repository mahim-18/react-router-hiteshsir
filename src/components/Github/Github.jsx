import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/mahim-18')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
    return (
        <div className='text-center bg-gray-400  m-4 p-4 text-3xl text-white'>
            Github Followers: {data.followers} 
            <br />
            Github Following: {data.following}
            <img src={data.avatar_url} alt="git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => { 
    const response = await fetch('https://api.github.com/users/mahim-18')
    return response
}