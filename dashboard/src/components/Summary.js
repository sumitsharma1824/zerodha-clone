import React from 'react';

const Summary =()=> {
    return ( 
        <>
            <div className='username'>
                <h1>Hi , User!</h1>
                <hr className='divider' />
            </div>
            <div className='section'>
                <span>Equity</span>
                {/* <hr className='divider'/>  */}
            </div>

            <div className='data'>
                <div className='first'>
                    <h1>3.74k</h1>
                    <p>Margin available</p>
                </div>
                <hr/>
                <div className='second'>
                    <p>
                        Margin used <span>0</span>{" "}
                    </p>
                    <p>
                        Opening balance <span>3.74k</span>{" "}
                    </p>
                </div>
            </div>

            <div className='section'>
                <span>
                    <p>Holding (13)</p>
                </span>
            </div>

            <div className='data'>
                <div className='first'>
                    <h1 className='profit'>1.55k <small>+5.20%</small>{" "}</h1>
                    <p>P&L</p>
                </div>
                <hr/>

                <div className='second'>
                    <p>
                        Current Value <span>31.43k</span>{" "}
                    </p>
                    <p>
                        Investment <span>29.88k</span>{" "}
                    </p>
                </div>
            </div>

        </>
     );
}

export default Summary;