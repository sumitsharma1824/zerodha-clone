import React from 'react';

function Education() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-5'>

                   <img src='media/education.svg' style={{width:"95%"}}/>
                </div>
                <div className='col-3'></div>
                <div className='col-4'>
                    <h1 className='fs-2'>Free ans open market education</h1>
                    <br />
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advaced trading </p>
                    <a href='' style={{ textDecoration: "none" }}>Versity<i class="fa-solid fa-arrow-right-long"></i></a>
                    <br />
                    <br />
                    <br />
                    <p>Trading Q&A, the most active trading and investrment community in india for all your market realted queries.</p>
                    <a href=''  style={{ textDecoration: "none" }}>Versity<i class="fa-solid fa-arrow-right-long"></i></a>

                </div>
            </div>
        </div>
    );
}

export default Education;