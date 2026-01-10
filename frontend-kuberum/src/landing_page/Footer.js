import React from 'react';

function Footer() {
  
  return (
    <footer style={{backgroundColor:"rgba(240, 240, 240, 240)"}}>
    <div className="container bordrer-top mt-5">
      <div className="row p-5">
        <div className="col">
          <img src='images/logo.svg' alt='logo' style={{ width: "50% ",marginLeft:"14px" }} />
          <p className="p-3">&copy; 2024 - 2026, Kuberum Broking Ltd. All rights reserved.</p>
        </div>
        <div className="col">
          <h4>Company</h4>
          <a href=''>About</a><br />
          <a href=''>Products</a><br />
          <a href=''>Pricing</a><br />
          <a href=''>Referral Zone</a><br />
          <a href=''>Careers</a>
          <a href=''>Kuberum Tech</a>
          <a href=''>Press & Media</a>
          <a href=''>Kuberum Care</a>
        </div>
        <div className="col">
          <h4>Support</h4>
          <a href=''>Contact</a><br />
          <a href=''>Support Portal</a><br />
          <a href=''>Z-Connect blog</a><br />
          <a href=''>List of changes</a><br />
          <a href=''>Downloads & resources</a>
        </div>
        <div className="col"><h4>Action</h4>
          <a href=''>Open an Account</a><br />
          <a href=''>Fund Transfer</a><br />
          <a href=''>60 Days Challenge</a><br /> 
        </div>
      </div>
      <div className="text-muted mt-5" >
        <p >Kuberum Broking Ltd.: Member of BSE & NSE - SEBI Registration no.: INZ00003823 CDSL: Despositary Services through Kuberum Securities Pvt. Ltd. - SEBI Registration.: IN-DP-1002365 accomodity Trading through Kuberum Commodities Pvt. Ltd. MCX: 2450783 - SEBI Registration no.: INZ00003823 Registered Address: Kuberum Broking Ltd, #44/22 chiplun ke ped ke 4 kadam aage chotu pan bhandar ke opposite priti furniture ke basement me.</p>

      <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.

        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
      <p>India's largest broker based on networth as per NSE.<a href="https://enit.nseindia.com/MemDirWeb/brokerDetailPage_Beta?memID=2516&h_MemType=members&memName=ZERODHA%20BROKING%20LIMITED" style={{ textDecoration: "none" }}> NSE Broker factsheet.</a></p>

      <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services,<a href="" style={{ textDecoration: "none" }}> please create a ticket here.</a> </p>

      <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p></div>



    </div>
     </footer>
  )
 
}

export default Footer;