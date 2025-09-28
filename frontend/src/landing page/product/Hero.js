import React from 'react';

function Hero() {
    return (

        <div style={{ marginBottom: "3rem" }} className='container text-center p-5 mt-5  border-bottom'>
            <div style={{ marginBottom: "6rem" }}>
                <p className='fs-3'>Zerodha Products</p>

                <p className='fs-5 text-muted'> Sleek, modern, and intuitive trading platforms</p>
                <p className='fs-5 text-muted '> Check out our  <a style={{ textDecoration: "none" }} href='/'>investment offerings →</a></p>
            </div>


        </div>

    );
}

export default Hero;