import React from 'react'

function Universe() {
  return (
    <div className="container text-center p-5 mt-5">
      <div className="row ">
        <h2>The Kuberum Universe</h2>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="row p-5">
          <div className="col-4">
            <img src='images/zerodhaFundhouse.png' alt='zerodhafundhouse logo' style={{ width: "50%" }}></img><br />
            <p className="text-muted mt-2">Our asset management venture <br />that is creating simple and transparent index <br />funds to help you save for your goals.</p>


          </div>
          <div className="col-4 ">
            <img src='images/sensibullLogo.svg' alt='sensibull logo' style={{ width: "50%" }}></img>
            <p className="text-muted mt-2">Options trading platform that lets you <br />create strategies, analyze positions, and examine <br />data points like open interest, FII/DII, and more.</p>

          </div>
          <div className="col-4">
            <img src='images/tijori.svg' alt='zerodhafundhouse logo' style={{ width: "50%" }}></img><br />
            <p className="text-muted mt-2">Investment research platform <br />that offers detailed insights on stocks, <br />sectors, supply chains, and more.</p>

          </div>
        </div>
        <div className="row p-5">
          <div className="col-4">
            <img src='images/streakLogo.png' alt='zerodhafundhouse logo' style={{ width: "50%" }}></img><br />
            <p className="text-muted mt-2">Systematic trading platform <br />that allows you to create and backtest <br />strategies without coding.</p>
          </div>
          <div className="col-4 ">

            <img src='images/smallcaseLogo.png' alt='zerodhafundhouse logo' style={{ width: "50%" }}></img>
            <p className="text-muted mt-2">Thematic investing platform <br />that helps you invest in diversified <br />baskets of stocks on ETFs.</p>
          </div>
          <div className="col-4">

            <img src='images/dittoLogo.png' alt='zerodhafundhouse logo' style={{ width: "50%" }}></img>
            <p className="text-muted mt-2">Personalized advice on life <br />and health insurance. No spam <br />and no mis-selling.</p>
          </div>
        </div>
        <div className="row">
          <button className="p-2 btn btn-primary fs-5 mb-5" style={{ width: "15%", margin: "0 auto" }}>Signup Now</button>
        </div>
      </div>
    </div>
  )
}

export default Universe;