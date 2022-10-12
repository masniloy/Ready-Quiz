import React from 'react';
import { Link } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Nav.css';


const nav = () => {
    return (
        <div>
            <div className='navb container d-flex justify-content-between align-items-center p-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to='/' classname="navbar-brand" href="#">
                        <img src="logo.png" alt="Logo" width="70" height="64" classname="logo"></img>

                    </Link>
                    <h4 className='options'>Ready Quiz</h4>
                </div>
                <div className='d-flex ' >
                    <Link className='options p-2' to='/'><h6>Home</h6></Link>
                    <Link className='options p-2' to='/Topics'><h6>Topics</h6></Link>
                    <Link className='options p-2' to='/Statistics'><h6>Statistics</h6></Link>
                    <Link className='options p-2' to='/Blog'><h6>Blog</h6></Link>

                </div>
            </div>

        </div>

    );
};

export default nav;