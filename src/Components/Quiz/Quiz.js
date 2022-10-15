import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz)


    return (
        < div >
            <p>ki {quiz.data.questions.length}</p>
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