import React from 'react';
import {Card,Button} from 'react-bootstrap';
import './Cart.css';
import { BsFillCartCheckFill } from 'react-icons/bs';


const Cart = ({cart,getcart}) => {
    // console.log(cart);
    const {name,price,img} = cart;

    
    return (
        <div className='perCart shadow w-75'>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                price : {price}
                            </Card.Text>
                            <Button onClick={()=> getcart(cart)} className='bg-white border border-0 text-primary text-center cartButton'>Add to cart<BsFillCartCheckFill/></Button>
                        </Card.Body>
                    </Card>

        </div>
    );
};

export default Cart;