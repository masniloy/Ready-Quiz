import React from 'react';

const Topics = () => {
    return (
        <div>
            <h1>Topics</h1>
            <div classname="card mb-3" style={{ maxWidth: "540px" }}>
                <div classname="row g-0">
                    <div classname="col-md-4">
                        <img src="..." classname="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div classname="col-md-8">
                        <div classname="card-body">
                            <h5 classname="card-title">Card title</h5>
                            <p classname="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p classname="card-text"><small classname="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Topics;