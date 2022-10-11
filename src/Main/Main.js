import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav/Nav';
import Topics from '../Components/Topics/Topics';
const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;