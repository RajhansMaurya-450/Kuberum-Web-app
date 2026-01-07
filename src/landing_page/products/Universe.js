import React from 'react'

function Universe() {
  return (
    <div className="container text-center p-5 mt-5">
      <div className="row ">
        <h2>The Kuberum Universe</h2>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-4">
          <img src='images/zerodhaFundhouse.png' alt='zerodhafundhouse logo'style={{width:"20%"}}></img>

          <img src='images/sensibullLogo.svg' alt='zerodhafundhouse logo'style={{width:"20%"}}></img>
        </div>
        <div className="col-4"><img src='images/streakLogo.png' alt='zerodhafundhouse logo'style={{width:"20%"}}></img>
        <img src='images/smallcaseLogo.png' alt='zerodhafundhouse logo'style={{width:"20%"}}></img>
        </div>
        <div className="col-4"><img src='images/tijori.svg' alt='zerodhafundhouse logo'style={{width:"20%"}}></img>
        <img src='images/dittoLogo.png' alt='zerodhafundhouse logo'style={{width:"20%"}}></img>
        </div>
      </div>
    </div>
  )
}

export default Universe;