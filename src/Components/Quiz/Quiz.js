import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    const { id, questions } = quiz.data;

    const allQuestioons = questions.map(({ question: questiona }) => {
        console.log(questiona)
    });
    return (
        < div >
            <p>ki</p>
        </div >
    );
};

export default Quiz;