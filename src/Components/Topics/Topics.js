import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    // const { name } = topics.data;
    console.log(topics.data);
    return (
        <div>
            {
                topics.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)

            }
        </div >
    );
};

export default Topics;