import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/legal-logo-light.png" alt="logo" style={{width: '25%'}}/>
                  </Link>
                </div>
                <p>
                At Yellowpad AI, we offer a convenient online service for secretarial tasks, mailing, and e-scrivery. It's essential to be aware including with Yellowpad AI or any other third party, even if you have an attorney involved.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>
                <ul className="list">
                  <li>
                    <Link href="/about-2">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Services</Link>
                  </li>
                  <li>
                    <Link href="/">Features</Link>
                  </li>
                  <li>
                    <Link href="/">Our Pricing</Link>
                  </li>
                  <li>
                    <Link href="/">Latest News</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="list">
                  <li>
                    <Link href="/">FAQ's</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link href="/">Team</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    27 Division St, New York, <br /> NY 10002, USA
                  </li>
                  <li>
                    <Icon.Mail />
                    Email:{" "}
                    <a href="mailto:yellowpad@gmail.com">yellowpad@gmail.com</a>
                  </li>
                  <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:321984754">+ (321) 984 754</a>
                  </li>
                </ul>
                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="facebook"
                      target="_blank"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagramcom/"
                      className="instagram"
                      target="_blank"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} YellowPad AI
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src="/images/map.png" className="map" alt="map" />

        {/* Shape Images */}
        <div className="shape1">
          <img src="/images/shape1.png" alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape2.svg" alt="shape" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
