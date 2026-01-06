import React from 'react';
function Stats() {
    return (
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-2 mb-5">Trust with confidence</h1>
                    <h2 className="fs-4">Customer First Always</h2>
                    <p className="text-muted"> That's why 1.3+ crore customers trust Kuberum with ₹3.5+ lakh crores worth of equity investments. </p>

                    <h2 className="fs-4">No Spam or gimmicks</h2>
                    <p className="text-muted"> No gimmicks, spam, "gamification", or annoying push notification, High quality apps that you use at your pace, the way you like. </p>

                    <h2 className="fs-4">We make Your money works for you</h2>
                    <p className="text-muted"> With initiatives like Nudge and kill Switch, we don't just facilitate transactions, but actively helps you to better with your money. </p>

                    <h2 className="fs-4">The Kuberum Universe</h2>
                    <p className="text-muted"> Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs. </p>
                </div>
                <div className="col-6 p-5">
                    <img src='images/ecosystem.png' alt="ecosystem" style={{ width: "90%" }} />
                    <div className="text-center">
                        <a href ="" style={{textDecoration:"none"}} className="mx-5">Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href ="" style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Stats;