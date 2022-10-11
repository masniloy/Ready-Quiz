import React from 'react';

const Header = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" classname="carousel slide" data-bs-ride="false">
                <div classname="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" classname="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div classname="carousel-inner">
                    <div classname="carousel-item active">
                        <img src="..." classname="d-block w-100" alt="..."></img>
                        <div classname="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div classname="carousel-item">
                        <img src="..." classname="d-block w-100" alt="..."></img>
                        <div classname="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div classname="carousel-item">
                        <img src="..." classname="d-block w-100" alt="..."></img>
                        <div classname="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button classname="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span classname="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span classname="visually-hidden">Previous</span>
                </button>
                <button classname="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span classname="carousel-control-next-icon" aria-hidden="true"></span>
                    <span classname="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Header;