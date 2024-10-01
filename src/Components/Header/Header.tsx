import React from 'react'
import "./header.css"
import TeamNameContext from '../../Context/Context'

export default function Header() {
    const { teamName } = React.useContext(TeamNameContext)
    return (
        <header>
            <div className='header'>
                <h1>{teamName}</h1>
                <span>Theme</span>
            </div>
        </header>
    )
}
