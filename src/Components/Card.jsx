import { nodeName } from 'jquery';
import React from 'react';
import './Process.css'

const Card =(props) =>{
    return (
        <>


                <div className="col-md-4 mb-4">
                    <div className="card text-center hover-bg-primary">
                        <div className="text-center mt-2">
                        <img src={props.imgsrc} className="card-img-top" style={{width:"115px"}} 
                        alt={props.imgsrc}></img>
                        </div>
                       <a href="#" style={{textDecoration:"none", color:"black"}}>
                       <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        </div>
                       </a>
                    </div>
                </div>

        
        </>
    )
}
export default Card;