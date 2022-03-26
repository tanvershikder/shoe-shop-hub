import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import "./Ordersummary.css"

const Ordersumary = ({cart,deleteitem}) => {
    
    // console.log(deleteitem);
    return (
        <div className='d-flex align-item-center'>
            <img src={cart.img} alt="" className='orderimg m-3'/>
            <p>{cart.name}</p>
            <p onClick={()=>deleteitem(cart)}><AiFillDelete/></p>
        </div>
    );
};

export default Ordersumary;