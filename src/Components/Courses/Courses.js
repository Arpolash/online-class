import React from 'react';

const Courses = (props) => {
    const {name,img,price,teacher} = props.fakeData;
    return (
        <div className="row">
            <div className="d-flex  align-items-center border-bottom border-success m-3">
            <div className="col-md-4 col-12">
                <img style={{width:'200px'}} src={img} alt=""/>
            </div>

            <div className="col-md-8 col-12 pl-5">
                <h4 className="text-success">{name}</h4>
                <p>{teacher}</p>
                <h4>Price : <del>$99</del> ${price}</h4>
                <button onClick={() => props.handleAddCart(props.fakeData)} className="btn btn-success my-2">Enroll Now</button>
            </div>
            </div>
        </div>
    );
};

export default Courses;