import React from 'react'
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className='items font'>Streams</Link>
            <div className="right menu">
                <Link to='/' className='items font'>All streams</Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header;