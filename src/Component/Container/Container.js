import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Cart from '../ProductCart/Cart';
import './Container.css'

const Container = () => {
    const[cart,setCart] = useState([]);
    const [product,setProduct] = useState([]);
    const [singleChose,setSingleChose] = useState({});

    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setCart(data));
    },[])
    const getcart =(cart)=>{
        const newcart = [...product,cart]
        if(newcart.length > 4){
            alert('you can select just 4 shoes')
            return newcart;
        }
        setProduct(newcart);
    }
    // console.log(product);
    
    function rendomItem(min,max){
        let step1 = max - min +1;
        let step2 =Math.random() * step1;
        let result = Math.floor(step2) + min;

        return result;
    }
    // generate rendom element from an array
    const generateRendomItem = ()=>{
        let item = rendomItem(0,product.length-1);
        let produt = product[item];
        setSingleChose(produt);
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
                <Order getcart={product} singleChose={singleChose}></Order>
                <div className='ml-5'>
                    <button onClick={generateRendomItem} className='btn btn-primary text-center d-block mb-2'>Chose 1 for me</button>
                    <button className='btn btn-warning'>Chose Again</button>
                </div>
            </div>
            
        </div>
    );
};

export default Container;