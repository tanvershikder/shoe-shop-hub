import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Cart from '../ProductCart/Cart';
import './Container.css'

const Container = () => {
    const[cart,setCart] = useState([]);
    const [product,setProduct] = useState([]);
    const [singleChose,setSingleChose] = useState({});
    const [delet,setDelet] = useState([]);

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
        if(product.length > 0){
            let item = rendomItem(0,product.length-1);
            let produt = product[item];
            setSingleChose(produt);
        }
    }

   
    // clear all chose item 
    const clearChose = () =>{
        setProduct([]);
        setSingleChose([]);
    }

    // //delete item
    // console.log(product);
    const deleteitem = (cart)=>{
      
       
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
                <Order getcart={product} singleChose={singleChose} deleteitem={deleteitem}></Order>
                <div className='ml-5 justify-content-center'>
                    <button onClick={generateRendomItem} className='btn btn-primary text-center d-block mb-2 ml-2'>Chose 1 for me</button>
                    <button onClick={clearChose} className='btn btn-warning'>Chose Again</button>
                </div>
            </div>
            <div>
                <h4>রিয়েক্ট কিভাবে কাজ করে ?</h4>
                <p>
                    ফ্রন্ট-এন্ড ওয়েব ডেভেলপমেন্ট এর এক যুগান্তকারী এবং বুহু পরিচিত টুলস এর নাম রিয়েক্ট জেএস। এট এমন একটি ফ্রেম ওয়াক যা দিয়ে খুব দ্রুত ওয়েব ও মোবাইল এপ তৈরী করা যাই।
                    এটি একটি জাভাস্ক্রিপ্ট লাইব্রেরী ।

                    <br />
                     ReactJS একটি ফ্লেক্সিবল, ডিক্লারেটিভ ও ইফেক্টিভ জাভাস্ক্রিপ্ট লাইব্রেরী। এটি একটি কম্পোনেন্ট-বেজড ফ্রন্ট-এন্ড লাইব্রেরী যা দিয়ে শুধু মাত্র একটি অ্যাপ্লিকেশনের ভিউ লেয়ার তৈরী করা যায়।
                      এটি কম্পোনেন্ট এবং প্রোপস এর মাধ্যমে কাজ করে। 
                      এতে প্রোপস এর মাধ্যমে অবজেক্ট আকারে ডাটা গ্রহণ অ প্রেরণ করা যাই।
                                      
                </p>
                <h4> প্রোপস এবং স্টেট এর মাঝে difference কী?</h4>
                 <p>   
                     <strong>প্রোপস ঃ</strong> ।<br></br>
                     ১/ ডাটা শুধু পড়া যাই। ।<br></br>
                     ২/ প্রোপস immutable ।।<br></br>
                     ৩/ প্রোপস কে চাইল্ড component থেকে access করা যাই।<br></br>
                     ৪/ স্টোটলেস component এর প্রোপস আছে
                     <br /><br></br>

                     <strong>স্টেট ঃ</strong>।<br></br>
                     ১/State কে asynchronous ভাবে পরিবতন করা যাই.<br></br>
                     ২/State is mutable<br></br>
                     ৩/Stateless components কোন State থাকে না.<br></br>
                     
                </p>
                <h4> স্টেট কিভাবে কাজ করে ?</h4>
                <p>
                   স্টেটঃ
                   স্টেট component এর information Hold করে। এইটা কে চাইলে পরিবতন করা যাই । এটা তার চাইল্ড কম্পোনেন্ট থেকে access করা যাই না । এইটা কে রিয়েক্ট কম্পোনেন্ট এর হাট বলা হয়ে থাকে এইটা নিদেশনা দেই কম্পোনেন্ট এর ব্যবহার কেমঅন হবে এবং কিভাবে render করবে। 
                </p>
            </div>
        </div>
    );
};

export default Container;