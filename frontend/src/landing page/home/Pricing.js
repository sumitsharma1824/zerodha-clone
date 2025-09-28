import React from 'react';

function Princing() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <br />
                    <p>We pioneered the concept of discount broking and price transparency in India .Flat fees and no hidden charges</p>

                    <a href='' className='mx-5' style={{ textDecoration: "none" }}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>

                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col border p-3 text-center'>
                            <h1>₹0</h1>
                            <br/>
                            <p>Free equality delivery and direct mutual funds</p>
                        </div>
                        <div className='col border p-3 text-center'>
                            <h1>₹30</h1>
                            <br/>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
     );
}

export default Princing;