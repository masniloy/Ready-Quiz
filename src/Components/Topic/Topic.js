import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Topic.css';


const Topic = ({ topic }) => {
    const { name, id, logo, total } = topic;
    return (
        <div className='container '>
            <Card className="topic text-white">
                <Card.Img className='image' src={logo} alt="Card image" />
                <Card.ImgOverlay className=''>
                    <Card.Title className='title'>{name}</Card.Title>
                    <Card.Text className='total'> Total Question: {total}</Card.Text>
                    <Button to='https://openapi.programming-hero.com/api/quiz/1' className='button' >Start Quiz</Button>

                </Card.ImgOverlay>
            </Card>


        </div>
    );
};

export default Topic;