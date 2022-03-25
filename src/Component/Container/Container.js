import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Cart from '../ProductCart/Cart';
import './Container.css'

const Container = () => {
    const[cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setCart(data));
    },[])
    return (
        <div className='Container'>
            <div className='cart'>
                 
                {
                    cart.map(cart =><Cart key={cart.id} cart={cart}
                    ></Cart>)
                }
                
            </div>
            <div>
                <Order></Order>
            </div>
        </div>
    );
};

export default Container;