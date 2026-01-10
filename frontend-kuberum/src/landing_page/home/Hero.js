import React from 'react';
function Hero() {
    return ( 
      <div className="container p-5 mb-5">
        <div className="row text-center">
            <img src="images/homeHero.png" alt='homehero img' className='mb-5'></img>
            <h1>Invest In Anything</h1>
            <p> Online platform to Invest In stock, derivatives and mutual funds, option tradings!</p>
            <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"15%",margin:"0 auto"}}>Signup Now</button>
        </div>
      </div>
     );
}

export default Hero;