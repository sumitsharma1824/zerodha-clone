import React from 'react';

function Hero() {
    return ( 
        <div className='container' style={{backgroundColor:"#387ED1",color:"white",height:"400px"}}>
            {/* First row */}
            <div className='row  '>
                        <div className='col-1'></div>

                <div className='col-5 p-5'>
                    <h6> Support Protal</h6>
                </div>
                <div className='col-5 p-5 text-end'>
                    <h6>Track Ticket</h6>
                </div>
                        <div className='col-1'></div>

            </div>
            {/* Secound row */}
            <div className='row '>
                        <div className='col-1'></div>
            
                <div className='col-5 '>
                    <h5> Search for an answer or browse help topics to create a ticket</h5>

                    <div className='text-center p-2 mt-3 mb-3' style={{height:"50px",width:"500px",backgroundColor:"white",color:"black",borderRadius:"5px"}}>
                        eg. how do i activate F&O, why is my order getting rejected..
                    </div>

                    <a style={{color:"white"}} href=''>Track account opening </a> 
                    <br/>
                   <a style={{color:"white"}} href=''>Track segment activation </a>  
                    
                   <a style={{color:"white"}} href=''>Intraday</a>
                    
                    <a style={{color:"white"}} href=''>Margins </a>
                    <br/>
                    <a style={{color:"white"}} href=''>Kite user manual</a>
                </div>
                <div className='col-5 '>
                    <h5>Featured</h5>
                    <p>1. Current Takeovers ans Delisting- january 2024</p>
                    <p>2. Latest Intraday leverages- MIS and CO</p>
                </div>
                        <div className='col-1'></div>
           
            </div>
        </div>
     );
    }

export default Hero;