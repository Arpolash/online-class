import React from 'react';
import fakeData from '../../FakeData/Fakedata';
import Courses from '../Courses/Courses'
import Cart from '../Cart/Cart'
import { useState } from 'react';


const Classes = () => {
    const [cart,setCart] = useState([])
function handleAddCart(fakeData){
    const newCart = [...cart,fakeData];
    setCart(newCart)
}
    return (
        <div className="container">
           <div className="row mt-3" style={{background:'lightgray'}}>
               {/* courses section */}
                <div className="col-md-8">
                       {
                           fakeData.map(data => <Courses handleAddCart={handleAddCart} fakeData={data}></Courses>)
                       }
                </div>

                {/* cart section */}
                <div className="col-md-4 col-12 border-left border-success">
                    <Cart cart={cart}></Cart>
                </div>
           </div>
        </div>
    );
};

export default Classes;