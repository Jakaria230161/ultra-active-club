import React from 'react';
import { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const [time, settime] = useState(0)

    let total=time;
    for(const item of cart){
        total=total+parseInt(item.time)
    }
  
    return (
        <div>
            <h3 className='price'>Practice Time: {total} Minute</h3>  
        </div>
    );
};

export default Cart;