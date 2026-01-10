import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';


function ProductPage() {
    return (

        

        <>
            <Hero />
            <LeftSection imagesrc = "images/kite.png" title = "Kite" description = "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."trydemo = "" learnmore = "" Googleplay = "" Applestore = "" />

            <RightSection imagesrc = "images/console.png" title = "Console" description = "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnmore = ""/>

            <LeftSection imagesrc = "images/coin.png" title = "Coin" description = "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." trydemo = "" learnmore = "" Googleplay = "" Applestore = "" />

            <RightSection imagesrc = "images/kiteconnect.png" title = "Kite Connect API" description = "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." kiteconnect = ""/>

            <LeftSection imagesrc = "images/varsity.png" title = "Varsity Mobile" description = "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." Googleplay = "" Applestore = "" />
            <p className='text-center fs-5' style={{textDecoration:"text-muted"}}>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            <Universe />
        </>


    )
}

export default ProductPage;