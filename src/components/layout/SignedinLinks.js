import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedinLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/createproject'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating'>Member</NavLink></li>
        </ul>
    )
}

export default SignedinLinks