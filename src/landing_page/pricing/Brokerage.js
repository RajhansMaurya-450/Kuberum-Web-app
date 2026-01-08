import React from 'react'

function Brokerage() {
  return (
    <div className="comtainer mt-5 p-5">
      <div className="row text-center">
        <div className="col-4">
          <img src="images/pricing0.svg" alt="pricing zero logo" style={{ width: "60%" }} />
          <h1 className='fs-3'>Free equity delivery</h1>
          <p className="text-muted p-4">All equity delivery investments (NSE, BSE), <br />are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4">
          <img src="images/intradayTrades.svg" alt="pricing zero logo" style={{ width: "60%" }} />
          <h1 className='fs-3'>Intraday and F&O trades</h1>
          <p className="text-muted p-4">Flat ₹ 20 or 0.03% (whichever is lower) per<br /> executed order on intraday trades across equity,<br /> currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4">
          <img src="images/pricing0.svg" alt="pricing zero logo" style={{ width: "60%" }} />
          <h1 className='fs-3'>Free direct MF</h1>

          <p className="text-muted p-4">All direct mutual fund investments are <br /> absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>

      {/*NavTab for the equity, currency, commodity chart*/}
      {/*NavTab for the equity chart*/}

      <div className="row mt-5">
        <ul className="nav nav-tabs mb-4" id="brokerageTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="equity-tab"
              data-bs-toggle="tab"
              data-bs-target="#equity"
              type="button"
              role="tab"
              aria-controls="equity"
              aria-selected="false"
            >
              Equity
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="currency-tab"
              data-bs-toggle="tab"
              data-bs-target="#currency"
              type="button"
              role="tab"
              aria-controls="currency"
              aria-selected="false"
            >
              Currency
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="commodity-tab"
              data-bs-toggle="tab"
              data-bs-target="#commodity"
              type="button"
              role="tab"
              aria-controls="commodity"
              aria-selected="true"
            >
              Commodity
            </button>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="equity"
            role="tabpanel"
            aria-labelledby="equity-tab"
          >

            <div className="table-responsive">
              <table className="table table-bordered custom-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Equity delivery</th>
                    <th>Equity intraday</th>
                    <th>F&O - Futures</th>
                    <th>F&O - Options</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td><strong>Brokerage</strong></td>
                    <td>Zero Brokerage</td>
                    <td>0.03% or ₹20/executed order whichever is lower</td>
                    <td>0.03% or ₹20/executed order whichever is lower</td>
                    <td>Flat ₹20 per executed order</td>
                  </tr>

                  <tr>
                    <td><strong>STT/CTT</strong></td>
                    <td>0.1% on buy & sell</td>
                    <td>0.025% on sell side</td>
                    <td>0.02% on sell side</td>
                    <td>
                      0.125% on exercised value <br />
                      0.1% on sell side (premium)
                    </td>
                  </tr>

                  <tr>
                    <td><strong>Transaction charges</strong></td>
                    <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                    <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                    <td>NSE: 0.00173% <br /> BSE: 0</td>
                    <td>NSE: 0.03503% <br /> BSE: 0.0325%</td>
                  </tr>

                  <tr>
                    <td><strong>GST</strong></td>
                    <td colSpan="4">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>

                  <tr>
                    <td><strong>SEBI charges</strong></td>
                    <td colSpan="4">₹10 / crore</td>
                  </tr>

                  <tr>
                    <td><strong>Stamp charges</strong></td>
                    <td>0.015% or ₹1500 / crore</td>
                    <td>0.003% or ₹300 / crore</td>
                    <td>0.002% or ₹200 / crore</td>
                    <td>0.003% or ₹300 / crore</td>
                  </tr>
                </tbody>
              </table>
            </div>


          </div>

          {/*NavTab for the equity Currency*/}
          <div
            className="tab-pane fade"
            id="currency"
            role="tabpanel"
            aria-labelledby="currency-tab"
          >
            <div className="table-responsive">
              <table className="table table-bordered custom-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Currency futures</th>
                    <th>Currency options</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td><strong>Brokerage</strong></td>
                    <td>0.03% or ₹20/executed order whichever is lower</td>
                    <td>₹20/executed order</td>
                  </tr>

                  <tr>
                    <td><strong>STT/CTT</strong></td>
                    <td>No STT</td>
                    <td>No STT</td>
                  </tr>

                  <tr>
                    <td><strong>Transaction charges</strong></td>
                    <td>NSE: 0.00035% <br /> BSE: 0.00045%</td>
                    <td>NSE: 0.0311% <br /> BSE: 0.001%</td>
                  </tr>

                  <tr>
                    <td><strong>GST</strong></td>
                    <td colSpan="2">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>

                  <tr>
                    <td><strong>SEBI charges</strong></td>
                    <td colSpan="2">₹10 / crore</td>
                  </tr>

                  <tr>
                    <td><strong>Stamp charges</strong></td>
                    <td>0.0001% or ₹10 / crore</td>
                    <td>0.0001% or ₹10 / crore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/*NavTab for the equity commodity*/}

          <div
            className="tab-pane fade"
            id="commodity"
            role="tabpanel"
            aria-labelledby="commodity-tab"
          >
            <div className="table-responsive">
              <table className="table table-bordered custom-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Commodity futures</th>
                    <th>Commodity options</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <strong>Brokerage</strong>
                    </td>
                    <td>0.03% or ₹20/executed order whichever is lower</td>
                    <td>₹20/executed order</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>STT/CTT</strong>
                    </td>
                    <td>0.01% on sell side (Non-Agri)</td>
                    <td>0.05% on sell side</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Transaction charges</strong>
                    </td>
                    <td>
                      MCX: 0.0021%
                      <br />
                      NSE: 0.0001%
                    </td>
                    <td>
                      MCX: 0.0418%
                      <br />
                      NSE: 0.001%
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>GST</strong>
                    </td>
                    <td colSpan="2">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>SEBI charges</strong>
                    </td>
                    <td>
                      Agri: ₹1 / crore
                      <br />
                      Non-agri: ₹10 / crore
                    </td>
                    <td>₹10 / crore</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Stamp charges</strong>
                    </td>
                    <td>0.002% or ₹200 / crore on buy side</td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <a href="/" style={{ textDecoration: "none" }}>
          Calculate your costs upfront using our brokerage calculator
        </a>
      </div>

      {/* Charges for account opening navtab */}
      <div className="row mt-4">
        <div className="col-12">
          <h5 className="mb-3">Charges for account opening</h5>

          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Type of account</th>
                  <th className="text-end">Charges</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Online account</td>
                  <td className="text-end">
                    <span className="badge bg-success">FREE</span>
                  </td>
                </tr>

                <tr>
                  <td>Offline account</td>
                  <td className="text-end">
                    <span className="badge bg-success">FREE</span>
                  </td>
                </tr>

                <tr>
                  <td>NRI account (offline only)</td>
                  <td className="text-end">₹ 500</td>
                </tr>

                <tr>
                  <td>
                    Partnership, LLP, HUF, or Corporate accounts
                    <span className="text-muted"> (offline only)</span>
                  </td>
                  <td className="text-end">₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Demat Annual Maintenance charges navtab */}
      <div className="row mt-4">
        <div className="col-12">
          <h5 className="mb-3">Demat AMC (Annual Maintenance Charge)</h5>

          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Value of holdings</th>
                  <th className="text-end">AMC</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Up to ₹4 lakh</td>
                  <td className="text-end">
                    <span className="badge bg-success">FREE*</span>
                  </td>
                </tr>

                <tr>
                  <td>₹4 lakh – ₹10 lakh</td>
                  <td className="text-end">
                    ₹100 per year, charged quarterly*
                  </td>
                </tr>

                <tr>
                  <td>Above ₹10 lakh</td>
                  <td className="text-end">
                    ₹300 per year, charged quarterly
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footnote */}
          <p className="text-muted small mt-2">
            * Lower AMC is applicable only if the account qualifies as a Basic Services
            Demat Account (BSDA). BSDA account holders cannot hold more than one demat
            account.{" "}
            <a href="/" className="text-primary">
              Click here
            </a>{" "}
            to learn more about BSDA.
          </p>
        </div>
      </div>

      <div className="row mt-4 p-5">
        <h2 className='mt-4 fs-4'>Charges Explained</h2>
        <div className="col-6 mt-4">
          <h6>Securities/Commodities transaction tax</h6><br />
          <p style={{ fontSize: "12px", textDecoration: "text-muted" }}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>

          <p style={{ fontSize: "12px", textDecoration: "text-muted" }}>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

          <h6>Transaction/Turnover Charges</h6><br />
          <p style={{ fontSize: "12px", textDecoration: "text-muted" }}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

          <p style={{ fontSize: "12px", textDecoration: "text-muted" }}>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>

          <p style={{ fontSize: "12px", textDecoration: "text-muted" }}>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>

          <p style={{ fontSize: "12px", textDecoration: "text-muted" }}>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>

          <p style={{ fontSize: "12px", textDecoration: "text-muted" }}>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>


          <h6>Securities/Commodities transaction tax</h6><br />
          <p style={{ fontSize: "12px", textDecoration: "text-muted" }}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>

          <p style={{ fontSize: "12px", textDecoration: "text-muted" }}>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>


          <h6>Call & trade</h6><br />
          <p style={{ fontSize: "12px", textDecoration: "text-muted" }}>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>


          <h6>Securities/Commodities transaction tax</h6><br />
          <p style={{ fontSize: "12px", textDecoration: "text-muted" }}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>

          <p style={{ fontSize: "12px", textDecoration: "text-muted" }}>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>


          <h6>Stamp charges</h6><br />
          <p style={{ fontSize: "12px", textDecoration: "text-muted" }}>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>


          <h6>NRI brokerage charges</h6><br />
          <ul style={{ fontSize: "12px", textDecoration: "text-muted" }}>
            <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
          </ul>


          <h6>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6><br />
          <ul style={{ fontSize: "12px", textDecoration: "text-muted" }}>
            <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
          </ul>
          
          <h6>Margin Trading Facility (MTF)</h6><br />
          <ul style={{ fontSize: "12px", textDecoration: "text-muted" }}>
            <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
            <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
            <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
          </ul>
        </div>
        <div className="col-6"></div>
      </div>

    </div>



  )
}

export default Brokerage;