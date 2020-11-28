import React from 'react';
import RightSideImag from '../imges/sidePic.png'

const Story =(props)=>{
    return(
        <>
<div style={{height:"50px"}}></div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="mb-3">{props.title}</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui omnis 
                        animi nam cumque vitae veritatis hic nemo eveniet iure, beatae corrupti 
                        velit ratione vel alias reprehenderit laboriosam sequi? Quidem, doloribus!
                    </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui omnis 
                        animi nam cumque vitae veritatis hic nemo eveniet iure, beatae corrupti 
                        velit ratione vel alias reprehenderit laboriosam sequi? Quidem, doloribus!
                    </p><br></br>
                    <button type="button" className="btn btn-primary btn-sm">{props.btn}</button>
                </div>
                
                <div className="col-md-6">
                    <img src={RightSideImag} className="img-fluid"></img>
                </div>
            </div>
            
        </div>
        
        
        </>
    )
}
export default Story;