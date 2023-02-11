import React from 'react';

const ReviewItem = ({cart}) => {
    return (
        <div>
            <h1>This is Review Item. {cart.length}</h1>
            {console.log(cart)}
        </div>
    );
};

export default ReviewItem;