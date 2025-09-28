import React from 'react';

function RigtImage({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore, }) {
    return ( 
        <div style={{marginBottom:"7rem",marginTop:"2rem"}} className='container p-5 '>
            <div className='row'>
{/* first column */}
                <div className='col-1'></div> 

                
 {/* third column */}
               
                <div className='col-4'>
                    <h1 className='fs-3 mt-5 mb-3'>{productName}</h1>
                    <p className='fs-6 text-muted' style={{ lineHeight: "1.8" }}>{productDescription}</p>
                    <div className='mb-4'>
                        <a className='fs-6' style={{textDecoration:"none",marginRight:"3rem"}} href={tryDemo} > Try Demo →</a>
                        <a className='fs-6' style={{textDecoration:"none"}} href={learnMore} > Learn more →</a>
                    </div>

                    <div>
                        <a href={googlePlay}  style={{textDecoration:"none",marginRight:"2rem"}} > <img src='media/googlePlayBadge.svg' /></a>
                       
                        <a href={appStore} tyle={{textDecoration:"none"}} > <img src='media/appstoreBadge.svg' /></a>
                    </div>

                  


                </div>
                  {/* forth column */}
                    <div className='col-1'></div>

                 {/* secound column */}
                <div className='col-6 mb-5'>
                    <img src={imageURL} alt="Left Side" className='img-fluid' />
                </div>
            </div>
        </div>
     );
}

export default RigtImage;