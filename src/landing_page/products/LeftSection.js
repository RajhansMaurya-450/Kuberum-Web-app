import React from 'react';

function LeftSection({imagesrc, title, description, trydemo, learnmore, Googleplay, Applestore}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={imagesrc}></img>
        </div>
        <div className="col-6">
          <h1>{title}</h1>
          <p>{description}</p>
          <a href=''>{trydemo}</a>
          <a href=''>{learnmore}</a>
          <a href=''>{Googleplay}
            <img src='images/googlePlayBadge.svg'alt='playstore'></img>// googleplay_logo
          </a>
          <a href=''>{Applestore}
            <img src='images/appstoreBadge.svg' alt='Applestore'></img> //appstore_logo
          </a>
        </div>
      </div>
    </div>
  )
}

export default LeftSection;