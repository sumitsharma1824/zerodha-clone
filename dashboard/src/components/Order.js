import React from 'react';
import { Link } from "react-router-dom";


const Order = () => {
    return (
        <div className='orders'>
            <div className='no-order'>
                <p>You haven't placed any orders today</p>

                <Link to={"/"} className='btn'>
                    Get started
                </Link>
            </div>
        </div>
    );
}

export default Order;