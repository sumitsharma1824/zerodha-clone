import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='img col-6 p-5'>
                    <img src='media/largestBroker.svg'></img>
                </div>
                <div className='content col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>

                    <p className='mb-5'>2+ million Xerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='Left col-6'>
                            <ul>
                                <li>
                                    <p>Future and Option</p>
                                </li>

                                <li>
                                    <p>Commodity derivatives</p>
                                </li>

                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='Right col-6'>
                            <ul>
                                <li>
                                    <p>Srocks and ipos</p>
                                </li>

                                <li>
                                    <p>Direct mutual funds</p>
                                </li>

                                <li>
                                    <p>Bonds and Govt. security</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <img src='media/pressLogos.png' style={{ width: "90%" }} />
                </div>
            </div>
        </div>
    );
}

export default Awards;