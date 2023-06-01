import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const WhatWeDo = () => {
    return (
        <>
            <div className="what-we-do-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Why choose Yellowpad</h2>
                        <div className="bar"></div>
                        <p>We’re a technology-focused platform that enables everyone to access affordable and high quality legal services</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-what-we-do-box">
                                <div className="icon">
                                    <i className="flaticon-monitor"></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                    Library of official legal forms
                                    </Link>
                                </h3>
                                <p>Files thousands of cases in court using official court forms for all types of cases including small claims, traffic tickets, divorce, landlord-tenant and more.</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-what-we-do-box">
                                <div className="icon">
                                    <i className="flaticon-idea"></i>
                                </div>
                                
                                <h3>
                                    <Link href="/service-details">
                                    High speed, automated prep
                                    </Link>
                                </h3>

                                <p>Unlike other services, your forms will be prepared in seconds on Yellowpad, thanks to state-of-the-art automation technology.</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-what-we-do-box">
                                <div className="icon">
                                    <i className="flaticon-software"></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                    Enterprise features available
                                    </Link>
                                </h3>
                                <p>Integrate directly into your accounting or property management software to get a one-click solution at affordable prices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatWeDo;  