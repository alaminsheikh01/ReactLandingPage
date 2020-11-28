import React from 'react';
import brandImg from '../imges/del.png'
import '../index.css'

const Certificate =()=>{
    return (
        <>
        <div style={{height:'100px'}}></div>
        <div className="container">
            <h1>Our Certificate</h1>
            <div className="row">
                <div className="col-md-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Officiis placeat architecto beatae aut, sed ipsum ducimus 
                        totam ad reprehenderit itaque ex enim dolorem doloremque in?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Officiis placeat architecto beatae aut, sed ipsum ducimus 
                        totam ad reprehenderit itaque ex enim dolorem doloremque in?
                    </p>
                </div>
                <div className="col-md-6 content_center">
                    <div className="row">
                        <div className="col-md-3 col-4 cus_img_brand">
                        <img src={brandImg}></img>
                        </div>
                        <div className="col-md-3 col-4 cus_img_brand">
                        <img src={brandImg}></img>
                        </div>
                        <div className="col-md-3 col-4 cus_img_brand">
                        <img src={brandImg}></img>
                        </div>
                        <div className="col-md-3 d-none d-lg-block d-xl-block cus_img_brand">
                        <img src={brandImg}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Certificate;