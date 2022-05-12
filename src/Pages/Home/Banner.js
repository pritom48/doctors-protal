import React from 'react';
import chair from "../../assets/images/chair.png"
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div style={{ background: `url(${bg})` }} class="hero min-h-screen px-12">
            <div class="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;