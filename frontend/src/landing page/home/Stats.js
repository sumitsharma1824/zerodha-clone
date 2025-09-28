import React from 'react';

function Stats() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='content col-6 p-5'>
                    <h1 className='fs-2'>Trust with confidence</h1>
                    <br />
                    
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='text-muted'>That's why 1.3 corore customers trust zerodha with Rs 3.5+ lakh crores worth of equity investment </p>
                    <br />
                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks ,spam,"gamification ,or annoying push notification .High quality apps that you use at your pace. the  way you like.</p>
                    <br />

                    <h3 className='fs-4'>The zerodha universe </h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem . our investments in 30+ fintech startups ogger you tailored sevices specifics to your needs</p>
                    <br />

                    <h3 className='fs-4'>Do better with money </h3>
                    <p className='text-muted'>with initiatives like budge and kill switch ,we don't just facilitate transactions ,but actively help you do better with your money</p>

                </div>
                <div className='image col-6 p-5'>
                    <img src='media/ecosystem.png' style={{ width: "95%" }} />
                    <div className='text-center p-5'>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our product <i class="fa-solid fa-arrow-right-long"></i></a>
                    <a href='' style={{textDecoration:"none"}}>Try kite </a>

                    </div>

                </div>


            </div>
        </div>
    );
}

export default Stats;