import React from 'react';
function Education() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 mb-5">
                    <img src='images/education.svg' alt='education image' style={{width:"70%"}}/>
                </div>
                <div className="col-6 mt-5">
                    <h1 className='fs-2 mb-3'>Free and Open market education</h1>
                    <p className='text-muted'>varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{ textDecoration: "none" }}>versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br/><br/>

                    <p className='text-muted'>Trading Q&A, the most active trading and investment market related queries.</p>
                    <a href="" style={{ textDecoration: "none" }}>TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;