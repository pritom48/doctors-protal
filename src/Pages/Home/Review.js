import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem error ut, totam minima inventore saepe.</p>
                <div className="flex items-center">
                    <div>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={review.img} alt='' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>{review.name}</h2>
                        <h4>{review.location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;