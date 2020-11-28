import React from 'react';
import './Process.css'

const Process =()=>{

    return(
        <>
            <section>
                <div style={{height:'125px'}}></div>
                <h1 className="text-center">Our Process</h1>
                <div className="container">
                    <div className="row">
                <div class="col-lg-4 col-sm-6 mb-lg- mb-4">
                    <div class="hover-bg-primary text-center position-relative px-4 py-5 rounded-lg shadow"> 
                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559058694/feature-1.png" 
                    class="img-fluid" alt="feature-image"/>
                        <h5 class="pt-5 pb-3 text-capitalize card-title">No Setup</h5>
                        <p class="mb-4">For what reason would it be advisable for me to 
                        think about business content? That might be little bit risky 
                        to have crew member like them.</p> 
                        <a class="btn btn-outline-primary" href="#" data-abc="true">read more</a>
                    </div>
                </div>

            <div class="col-lg-4 col-sm-6 mb-lg- mb-4">
                <div class="hover-bg-primary text-center position-relative px-4 py-5 rounded-lg shadow"> 
                <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559058716/feature-2.png" 
                class="img-fluid" alt="feature-image"/>
                    <h5 class="pt-5 pb-3 text-capitalize card-title">free trail</h5>
                    <p class="mb-4">For what reason would it be advisable for me to 
                    think about business content? That might be little bit risky to have 
                    crew member like them.</p> <a class="btn btn-outline-primary" href="#" data-abc="true">read more</a>
                </div>
            </div>

            <div class="col-lg-4 col-sm-6 mb-lg- mb-4">
                <div class="hover-bg-primary text-center position-relative px-4 py-5 rounded-lg shadow"> 
                <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559058733/feature-3.png" 
                class="img-fluid" alt="feature-image"/>
                    <h5 class="pt-5 pb-3 text-capitalize card-title">optimized data</h5>
                    <p class="mb-4">For what reason would it be advisable for me to think about
                     business content? That might be little bit risky to have crew member like 
                     them.</p> <a class="btn btn-outline-primary" href="#" data-abc="true">read more</a>
                </div>
            </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Process;