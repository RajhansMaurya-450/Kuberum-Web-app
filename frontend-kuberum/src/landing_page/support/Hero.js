import React from 'react'

function Hero() {
  return (
    <section className="support-portal">
      <div className="container py-5">
        {/* Top bar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="text-white mb-0">Support Portal</h5>
          <a href="#" className="text-white text-decoration-underline">
            Track Tickets
          </a>
        </div>

        <div className="row align-items-start">
          {/* Left section */}
          <div className="col-md-7">
            <h3 className="text-white fw-semibold mb-3">
              Search for an answer or browse help topics <br />
              to create a ticket
            </h3>

            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
            />

            <div className="d-flex flex-wrap gap-3">
              <a href="#" className="support-link">
                Track account opening
              </a>
              <a href="#" className="support-link">
                Track segment activation
              </a>
              <a href="#" className="support-link">
                Intraday margins
              </a>
              <a href="#" className="support-link">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right section */}
          <div className="col-md-5 mt-4 mt-md-0">
            <h5 className="text-white mb-3">Featured</h5>
            <ol className="text-white ps-3">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-underline">
                  Current Takeovers and Delisting – January 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-underline">
                  Latest Intraday leverages – MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
   
  )
}

export default Hero;