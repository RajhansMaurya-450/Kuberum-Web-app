import React from 'react'

function RightSection({imagesrc, title, description, learnmore,kiteconnect}) {
  return (
    <div className="container border-top p-5">
      <div className="row">

        <div className="col-6 p-5 mt-5">
          <h1>{title}</h1>

          <p>{description}</p>


          <a href={learnmore} style={{ textDecoration: "none" }}>Learn More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br />

          <a href={kiteconnect} style={{ textDecoration: "none" }}>kiteconnect<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br />

        </div>
        <div className="col-6 p-5 text-center">

          <img src={imagesrc}></img>

        </div>
      </div>
    </div>

  )
}

export default RightSection;