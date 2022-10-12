import React from 'react';
import Button from 'react-bootstrap/Button';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Topic.css';
import { Link } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';



const Topic = ({ topic }) => {
    const { name, id, logo, total } = topic;
    return (
        <div className='container '>
            <Card className="topic text-white">
                <Card.Img className='image' src={logo} alt="Card image" />
                <Card.ImgOverlay className=''>
                    <Card.Title className='title'>{name}</Card.Title>
                    <Card.Text className='total'> Total Question: <b>{total}</b></Card.Text>
                    <Link to={`${id}`} className='button' >Start Quiz</Link>

                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Topic;