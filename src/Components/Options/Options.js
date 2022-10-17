import React from 'react';
import './Option.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, id, correct }) => {
    const correctAnswer = (selectOption) => {
        if (selectOption === correct) {
            toast.success("Your Answer Is Right.");
        } else {
            toast.error("Your Answer Is Wrong!");
        }
    };
    return (
        <div className='container '>
            <div >
                <div className=' d-flex align-items-center option' >
                    <div className=' d-flex justify-content-center align-items-center mr-5'>
                        <input
                            onClick={(forClick) => correctAnswer(forClick.target.value)}
                            type="radio"
                            name={id}
                            value={option}
                        />
                        <div className='d-flex justify-content-center align-items-center' >
                            <p className='text-center text' >{option}</p>
                        </div>
                    </div>
                    <ToastContainer />
                </div>

            </div>
        </div >
    );
};

export default Options;