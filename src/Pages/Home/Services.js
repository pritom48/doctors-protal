import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'

const Services = () => {
    return (
        <div className='px-10'>
            <div className='my-10'>
                <h6 className='text-center text-base text-emerald-400 font-bold pt-10'>OUR SERVICES</h6>
                <h3 className='text-center text-5xl pb-10'>Service We Provide</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-20 '>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={fluoride} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Fluoride Treatment</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={cavity} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Cavity Filling</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={whitening} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Teeth Whitening</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:mx-28	'>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                        <div className='lg:pl-16'>
                            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;