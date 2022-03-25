import React from 'react';
import {Card,Button} from 'react-bootstrap';
import './Cart.css';
import { BsFillCartCheckFill } from 'react-icons/bs';


const Cart = ({cart}) => {
    // console.log(cart);
    const {name,price,img} = cart;
    return (
        <div className='perCart'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                price : {price}
                            </Card.Text>
                            <Button className='bg-white border border-0 text-primary text-center'>Add to cart<BsFillCartCheckFill/></Button>
                        </Card.Body>
                    </Card>

        </div>
    );
};

export default Cart;