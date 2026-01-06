import React from 'react';

function Teams() {
  return (
    <div className="container">
      <div className="row p-5">
        <h2 style={{ fontSize: "25px", color: "#424242", textAlign: "center" }}>People</h2>
      </div>
      <div className="row">
        <div className="col-6 p-5 mt-4" style={{ textAlign: "center" }}>
          <img src='images/nithinKamath.jpg' alt='founder image' style={{ width: "55%", borderRadius: "100%", marginLeft: "50%" }} />
          <h5 className="mt-3" style={{marginLeft:"50%"}}>Raj Hans Maurya</h5>
          <h6 className="p-3" style={{marginLeft:"50%"}} >Founder, CEO</h6>
        </div>
        <div className="col-5 p-5 mt-5" style={{ fontSize: "16px" }}>
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
}

export default Teams;