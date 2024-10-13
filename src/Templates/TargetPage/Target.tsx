import React from 'react'
import { useParams } from 'react-router-dom'

export default function Target() {
    const { myteam } = useParams();
    return (
        <div className='text-center'>
            <strong>Team Name: {myteam}</strong>
        </div>
    )
}
