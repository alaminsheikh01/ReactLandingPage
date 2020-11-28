import React from 'react';
import $ from 'jquery'
import Card from './Card';
import Sdata from './Sdata'
import Sdata1 from './Sdata1'
import Sdata2 from './Sdata2'

$(document).ready(function(){ 
    $("#myTab a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });
});

const Portfolio =()=>{
    return(
        <>
        <div style={{height:"100px"}}></div>
        <div className="text-center">
            <h1>Portfolio</h1>
        </div>
        <div style={{height:"60px"}}></div>
        <div className="container">

    <div className="bs-example ">
        <div style={{textAlign:"center"}}>
        <ul id="myTab" className="nav nav-pills">
        <li className="nav-item">
            <a href="#Development" className="nav-link active">Web Development</a>
        </li>
        <li className="nav-item">
            <a href="#Software" className="nav-link">Software Development</a>
        </li>
        <li className="nav-item">
            <a href="#Design" className="nav-link">Web Design</a>
        </li>
        
    </ul>
        </div>
 
    <div className="tab-content pt-5">
        <div className="tab-pane fade show active" id="Development">

                  <div className="">
                   <div className="row gy-4">
                   {
                          Sdata.map((val, ind) =>{
                              return <Card key={ind}
                              imgsrc={val.imgsrc}
                              title={val.title}
                              text = {val.text}></Card>
                          })
                      }
                   </div>
                  </div>
        
        </div>
        <div className="tab-pane fade" id="Design">

                  <div className="">
                   <div className="row gy-4">
                   {
                          Sdata1.map((val, ind) =>{
                              return <Card key={ind}
                              imgsrc={val.imgsrc}
                              title={val.title}
                              text = {val.text}></Card>
                          })
                      }
                   </div>
                  </div> 

        </div>
        <div className="tab-pane fade" id="Software">
                  <div className="">
                   <div className="row gy-4">
                   {
                          Sdata2.map((val, ind) =>{
                              return <Card key={ind}
                              imgsrc={val.imgsrc}
                              title={val.title}
                              text = {val.text}></Card>
                          })
                      }
                  </div>
                </div> 

        </div>
    </div>
</div>
         
            </div>
        
        
        </>
    )
}
export default Portfolio;