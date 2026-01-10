import React from 'react';

function LeftSection({imagesrc, title, description, trydemo, learnmore, Googleplay, Applestore}) {
  return (
    <div className="container border-top p-5">
      <div className="row">
        <div className="col-6 p-5 text-center">
          <img src={imagesrc}></img>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{title}</h1>
          <p>{description}</p>
          <a  href ={trydemo } style={{textDecoration:"none"}}>Try Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href ={learnmore} style={{textDecoration:"none"}}>Learn More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br/>
         <div className="p-3">
          <a href=''>{Googleplay}
            <img src='images/googlePlayBadge.svg'alt='playstore'></img>
          </a>
          <a className="p-5" href=''>{Applestore}
            <img src='images/appstoreBadge.svg' alt='Applestore'></img>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection;