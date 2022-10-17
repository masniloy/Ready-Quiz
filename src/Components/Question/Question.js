import React from 'react';
import Options from '../Options/Options';
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = (questions) => {
    const { question, options, id, correctAnswer } = questions.questions;
    console.log(options)
    const forTost = () => toast(
        `Correct Answer Is: ${correctAnswer}`, { duration: 2000 }
    );

    return (
        <div className='container d-fiex mt-5 '>

            <div className='d-flex justify-content-start'>
                <h4><b>#</b> {question.replace('<p>', '').replace('</p>', '')}</h4>
                <div  >
                    <FontAwesomeIcon className='ms-5' icon={faEye} onClick={forTost} />
                    <ToastContainer />
                </div>

            </div>

            <div className=''>
                {
                    options.map(option => <Options
                        option={option}
                        key={id}
                        id={id}
                        correct={correctAnswer}
                    ></Options>)
                }
            </div>
        </div >

    );
};

export default Question;