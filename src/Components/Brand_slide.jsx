import React from 'react';
import img from '../imges/brand1.png';
import img1 from '../imges/brand2.png';

const Brand_slide=()=>{
    return(
        <>

       <div style={{height:"100px"}}></div>
        <div className="text-center">
            <h1>Our Projects and Customers</h1>
        </div>
        <div style={{height:"40px"}}></div>

        <div className="container">
            <div className="row">
                <div className="col-md-3 col-6">
                    <img src={img} className="img-fluid"></img>
                </div>
                <div className="col-md-3 col-6">
                    <img src={img1} className="img-fluid"></img>
                </div>
                <div className="col-md-3 col-6">
                    <img src={img} className="img-fluid"></img>
                </div>
                <div className="col-md-3 col-6">
                    <img src={img1} className="img-fluid"></img>
                </div>
            </div>
            <div className="text-center mt-5">
            <button type="button" class="btn btn-primary btn-sm">View More</button>
            </div>
        </div>
        
        </>
    )
}

export default Brand_slide;