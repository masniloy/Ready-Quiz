import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';
const Statistics = () => {
    const Data = useLoaderData();
    const { data } = Data;

    return (
        <div className='container mt-5  align-items-center justify-content-center' style={{ height: '60vh', width: "100%" }} >
            <h1>Total Question</h1>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart

                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>




    );
}


export default Statistics;