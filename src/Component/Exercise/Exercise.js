import React from 'react';
import './Exercise.css'

const Product = ({data,SentTocart}) => {
    
    const {img,name,time}=data
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h3>Practice: {name} </h3>
            <p>Time: {time}</p>
            <button className='practice-btn' onClick={()=> SentTocart(data)}>Add To Cart</button>
        </div>
    );
};

export default Product;