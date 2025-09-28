import React from 'react';
import OpenAccount from '../OpenAccount';

function Universe() {
    return (
        <div className='container text-center'>

            <h1 className='fs-4 mb-4'> The Zerodha Universe</h1>
            <p style={{ fontSize: "17px" }} className='mb-5 text-muted'>Extend your trading and investment experience even further with our partner platforms </p>

            <div className='row'>
                <div className='col-4'>
                    <img style={{ width: "120px", height: "auto" }} src='media\smallcaseLogo.png' />
                    <p style={{ fontSize: "13px" }} className='p-4 text-muted'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-4 '>
                    <img style={{ width: "150px", height: "auto" }} src='media\sensibullLogo.svg' />
                    <p style={{ fontSize: "13px" }} className='p-4 text-muted'>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 '>
                    <img src='media\goldenpiLogo.png' />
                    <p style={{ fontSize: "13px" }} className='p-4 text-muted'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.</p>
                </div>
                <div className='col-4 '>
                    <img style={{ width: "120px", height: "auto" }} src='media\streak-logo.png' />
                    <p style={{ fontSize: "13px" }} className='p-4 text-muted'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.</p>
                </div>
                <div className='col-4 '>
                    <img style={{ width: "90px", height: "auto" }} src='media\dittoLogo.png' />
                    <p style={{ fontSize: "13px" }} className='p-4 text-muted'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.</p>
                </div>
                <div className='col-4'>
                    <img style={{ width: "120px", height: "auto" }} src='media\zerodhaFundhouse.png' />
                    <p style={{ fontSize: "13px" }} className='p-4 text-muted'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.</p>
                </div>
            </div>

           
             {/* <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto",}}>Sign up now</button> */}
        </div>

    );
}

export default Universe;