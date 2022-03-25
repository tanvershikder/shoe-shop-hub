import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Cart from '../ProductCart/Cart';
import './Container.css'

const Container = () => {
    const[cart,setCart] = useState([]);
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setCart(data));
    },[])
    const getcart =(cart)=>{
        setProduct(cart);
    }
    return (
        <div className='Container'>
            <div className='cart'>
                 
                {
                    cart.map(cart =><Cart 
                        key={cart.id} 
                        cart={cart}
                        getcart={getcart}
                    ></Cart>)
                }
                
            </div>
            <div className='shadow ordersection'>
                <Order getcart={product}></Order>
            </div>
        </div>
    );
};

export default Container;