import React from "react";
import Link from "next/link";

const IndustriesWeServe = () => {
  return (
    <>
      <div className="industries-serve-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Industries We Serve</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-buildings"></i>
                </div>
                Demand Letter
                <Link href="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-building-house"></i>
                </div>
                Small Claims
                <Link href="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-car"></i>
                </div>
                Landlord Tanent
                <Link href="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-credit-card"></i>
                </div>
                Civil Claims
                <Link href="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-building"></i>
                </div>
                Court Filings
                <Link href="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bxs-plane-alt"></i>
                </div>
                Mechanics Lien
                <Link href="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-group"></i>
                </div>
                Arbitration
                <Link href="/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-6 col-md-4">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-bitcoin"></i>
                </div>
                Family Law
                <Link href="/service-details" className="link-btn"></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="analytics-shape2">
          <img src="/images/bigdata-analytics/vector.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default IndustriesWeServe;
