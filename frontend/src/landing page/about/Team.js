import React from 'react';

function Team() {
    return (
        <div className='row p-5  mb-5 border-top '>

            <h2 className='text-center mb-5'> People</h2>

            {/* LEFT SECTION  */}
            <div className='col-3'></div>
            <div className='col-3 fs-6 text-center '>
                <img src='media\nithinKamath.jpg' style={{ borderRadius: "50%", height: "290px", width: "290px" }} />
                    <br/>
                <p className=' mt-3'>Nithin Kamath
                    <br/>
                    Founder, CEO</p>
            </div>
            {/* RIGHT SECTION  */}
            <div className='col-4 fs-6'>
                <p>INithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    <br />
                    <br />

                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    <br />
                    <br />


                    Playing basketball is his zen.

                    <br />
                    <br />
                    Connect on <a href='/' style={{ textDecoration: "none" }}>Homepage</a> / <a href='/' style={{ textDecoration: "none" }}>TradingQnA</a> /<a href='/' style={{ textDecoration: "none" }}>Twitter</a>

                </p>
            </div>
            <div className='col-2'></div>

        </div>
    );
}

export default Team;