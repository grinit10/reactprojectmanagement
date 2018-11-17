import React from 'react'
import { Link } from 'react-router-dom'
import SignedinLinks from './SignedinLinks';
import SignedOutLinks from './SignedoutLinks';


const Navbar = () => {
    return (
        <nav className="nav-wrapper deep-purple darken-4">
            <div className="container">
                <Link to='/' className="brand-logo">PMX</Link>
                <SignedinLinks></SignedinLinks>
                <SignedOutLinks></SignedOutLinks>
            </div>
        </nav>
    )
}

export default Navbar