import React from 'react';
function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="images/largestBroker.svg" alt="largest broker" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className= "mb-5">  2+ million Kuberum clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li>
                                        Futures and Options
                                    </li>
                                    <li>
                                        Commoditiy and derivatives
                                    </li>
                                    <li>Currency and derivatives</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>SIPs</li>
                                    <li>Stocks & Mutual Funds</li>
                                    <li>IPOs</li>
                                </ul>
                            </div>
                        </div>
                         <img src="images/pressLogos.png" alt='press log' style={{width:"90%"}}/>
                    
                </div>
            </div>
        </div>
    );
}

export default Awards;