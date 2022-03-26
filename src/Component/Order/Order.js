import React, { useState } from 'react';
import ChoseForME from '../CoseForMe/ChoseForME';
import Ordersumary from '../Ordersumary/Ordersumary';
import './Order.css'


const Order = ({getcart,singleChose,deleteitem}) => {            
    return (
        <div>
            <h3>selected shoes</h3>
            <div>
                {
                  getcart.map(cart => <Ordersumary
                    key={cart.id}
                    cart={cart}
                    singleChose={singleChose}
                    deleteitem={deleteitem}
                  ></Ordersumary>)  
                }
                <ChoseForME singleChose={singleChose} ></ChoseForME>
            </div>
        </div>
    );
};

export default Order;