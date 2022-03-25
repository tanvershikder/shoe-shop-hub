import React from 'react';
import ChoseForME from '../CoseForMe/ChoseForME';
import Ordersumary from '../Ordersumary/Ordersumary';
import './Order.css'

const Order = ({getcart,singleChose}) => {
            // console.log(singleChose);
    return (
        <div>
            <h3>selected shoes</h3>
            <div>
                {
                  getcart.map(cart => <Ordersumary
                    key={cart.id}
                    cart={cart}
                    singleChose={singleChose}
                  ></Ordersumary>)  
                }
                <ChoseForME singleChose={singleChose}></ChoseForME>
            </div>
        </div>
    );
};

export default Order;