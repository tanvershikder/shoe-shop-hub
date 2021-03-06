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
        const findItem = product.find((item)=> item.id === cart.id);
        if(findItem){
            alert("this item already add to cart");
        }
        else{
            const newcart = [...product,cart];
            
            if(newcart.length > 4){
                alert('you can select just 4 shoes')
                return newcart;
            }
            setProduct(newcart);
            console.log(newcart);
        }
        
        
        
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
                <h4>????????????????????? ?????????????????? ????????? ????????? ?</h4>
                <p>
                    ??????????????????-???????????? ??????????????? ????????????????????????????????? ?????? ?????? ????????????????????????????????? ????????? ???????????? ?????????????????? ???????????? ?????? ????????? ???????????????????????? ??????????????? ?????? ????????? ???????????? ??????????????? ???????????? ?????? ???????????? ????????? ??????????????? ???????????? ??? ?????????????????? ?????? ???????????? ????????? ????????????
                    ????????? ???????????? ??????????????????????????????????????? ??????????????????????????? ???

                    <br />
                     ReactJS ???????????? ??????????????????????????????, ????????????????????????????????? ??? ???????????????????????? ??????????????????????????????????????? ?????????????????????????????? ????????? ???????????? ??????????????????????????????-???????????? ??????????????????-???????????? ??????????????????????????? ?????? ??????????????? ???????????? ??????????????? ???????????? ?????????????????????????????????????????? ????????? ?????????????????? ???????????? ????????? ???????????????
                      ????????? ?????????????????????????????? ????????? ?????????????????? ?????? ????????????????????? ????????? ???????????? 
                      ????????? ?????????????????? ?????? ????????????????????? ????????????????????? ??????????????? ???????????? ??????????????? ??? ?????????????????? ????????? ????????????
                                      
                </p>
                <h4> ?????????????????? ????????? ??????????????? ?????? ???????????? difference ???????</h4>
                 <p>   
                     <strong>?????????????????? ???</strong> ???<br></br>
                     ???/ ???????????? ???????????? ????????? ???????????? ???<br></br>
                     ???/ ?????????????????? immutable ??????<br></br>
                     ???/ ?????????????????? ?????? ?????????????????? component ???????????? access ????????? ????????????<br></br>
                     ???/ ???????????????????????? component ?????? ?????????????????? ?????????
                     <br /><br></br>

                     <strong>??????????????? ???</strong>???<br></br>
                     ???/State ?????? asynchronous ???????????? ?????????????????? ????????? ?????????.<br></br>
                     ???/State is mutable<br></br>
                     ???/Stateless components ????????? State ???????????? ??????.<br></br>
                     
                </p>
                <h4> ??????????????? ?????????????????? ????????? ????????? ?</h4>
                <p>
                   ??????????????????
                   ??????????????? component ?????? information Hold ???????????? ???????????? ?????? ??????????????? ?????????????????? ????????? ????????? ??? ????????? ????????? ?????????????????? ?????????????????????????????? ???????????? access ????????? ????????? ?????? ??? ???????????? ?????? ????????????????????? ?????????????????????????????? ?????? ????????? ????????? ????????? ???????????? ???????????? ????????????????????? ????????? ?????????????????????????????? ?????? ????????????????????? ??????????????? ????????? ????????? ?????????????????? render ???????????????1 
                </p>
            </div>
        </div>
    );
};

export default Container;