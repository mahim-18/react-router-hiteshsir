import React from 'react'
import { useParams } from 'react-router-dom'
// useParams = allows you to access dynamic parameters
// When the URL changes to /user/123, useParams will return { userid: '123' }.

function User() {

    const {userid} = useParams()
    return (
        <>
        <div className='flex justify-center items-center'>
            <div className='bg-gray-400 text-3xl p-4 flex justify-center max-w-screen-lg items-center'>User: {userid}</div>
        </div>
        </>
    )
}

export default User
