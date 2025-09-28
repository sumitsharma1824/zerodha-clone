import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5  text-center'>
                <h3 className='mb-3'>Charges</h3>
                <br />
                <h5 className='text-muted fd-4'>List of all charges and taxes</h5 >
            </div>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <div className='col-md-4 p-5'>
                    <img src='media\pricingEquity.svg'/>
                    <h3 className='mb-3'>Free equity delivery</h3>
                    <br />
                    <p className='text-muted fd-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p >
                </div>
                <div className='col-md-4 p-5'>
                    <img src='media\intradayTrades.svg'/>
                    <h3 className='mb-3'>Intraday and F&O trades</h3>
                    <br />
                    <p className='text-muted fd-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p >
                </div>
                <div className='col-md-4 p-5'>
                    <img src='media\pricingEquity.svg'/>
                    <h3 className='mb-3'>Free direct MF</h3>
                    <br />
                    <p className='text-muted fd-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p >
                </div>
            </div>
        </div>
    );
}

export default Hero;