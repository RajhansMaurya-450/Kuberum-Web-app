import React from 'react';

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 p-5" style={{textAlign:"center"}}>
        <h1 style={{fontSize:"28px" }}>Zerodha Products</h1>
        <h3 style={{fontSize:"20px",margin:"10px 0px 15px"}}>Sleek, modern, and intuitive trading platforms</h3>
        <p style={{fontSize:"16px",margin:"16px 0px 15px"}}>Check out our <a href=''>investment offerings</a>
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
      </div>
    </div>
  )
}

export default Hero;