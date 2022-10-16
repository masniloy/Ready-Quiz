import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css';

const Head = () => {
    return (
        <div>
            <div className='container head img-fluid'>
                <h1>Welcome To Ready Quiz !</h1>
                <p><b>Ready Quiz is an excellent way to evaluate a student’s knowledge. It is very effective in the online learning process, as teachers can understand how much a student has understood the concept.</b></p><br /><br />

                <Link className='button mt-5' to='Topics'> Start Practice</Link>
            </div>
        </div>
    );
};

export default Head;