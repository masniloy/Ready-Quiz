import React from 'react';
import Options from '../Options/Options';
import './Question.css';
const Question = (questions) => {
    const { question, options, id } = questions.questions;
    console.log(options)
    const option = options.map((item, index) =>
        <div key={index}> {item}
        </div>
    );
    return (
        <div className='container'>

            <h6>{question.replace('<p>', '').replace('</p>', '')}</h6>
            <p className='option'>{option}</p>

        </div>
    );
};

export default Question;