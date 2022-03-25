import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import "./Ordersummary.css"

const Ordersumary = ({cart,singleChose}) => {
    // console.log(singleChose);
    // console.log(cart);

    return (
        <div className='d-flex align-item-center'>
            <img src={cart.img} alt="" className='orderimg m-3'/>
            <p>{cart.name}</p>
            <p><AiFillDelete/></p>
        </div>
    );
};

export default Ordersumary;