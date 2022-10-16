import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz)


    return (
        < div className='container mt-5' >
            {
                quiz.data.questions.map(question => <Question
                    key={question.id}
                    questions={question}
                ></Question>)
            }

        </div >

    );
};

export default Quiz;