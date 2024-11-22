import React from 'react';
import ReviewCard from './ReviewCard';

const UserReview = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 my-10 bg-green-50">
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
            </div>
        </div>
    );
};

export default UserReview;