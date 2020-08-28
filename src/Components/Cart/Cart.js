import React from 'react';


const Cart = (props) => {
    console.log(props.cart)
 const cart = props.cart;
 console.log(cart)
 let total = 0;
 for(let i = 0; i < cart.length;i++){
     const product = cart[i];
     total = total + product.price;
 }
    return (
        <div>
          <h3 className="text-center text-success py-3">Order Summary</h3>
                <h6 className="border-bottom border-success">{cart.length} Courses in Cart</h6>
                {
                    cart.map(name => <h6 className="bg-success text-white p-2">{name.name}</h6>)
                }
                <h4>Total price : ${total}</h4>
                <button className="btn btn-success w-100 mt-3">Checkout</button>
        </div>
    );
};

export default Cart;