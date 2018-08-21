import React from 'react';
import { Link } from 'react-router-dom';

const backgroundTopStyle = {
  background: 'url(assets/images/welcome.png)',
  height: '100vh',
  width: '100%',
  minHeight: '300px',
  maxHeight: '600px',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat'
};

const backgroundChartStyle = {
  background: 'url(assets/images/snappy_chart.jpeg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat'
};

const Landing = () => {
  return (
    <div className="center-align">
      {/* Top Message */}
      <div className="row" style={backgroundTopStyle}>
        <div className="col s12 white-text">
          <h1 className="section-margin">Welcome to Snappy!</h1>
          <p className="large-text">
            A convinient and easy to use tool to collect feedback from your
            users
          </p>
        </div>
      </div>
      {/* Features */}

      <div className="row top-section-padding s4 blue-grey lighten-5">
        <div className="col s12 m4">
          <i className="medium material-icons orange-text text-lighten-1">
            credit_card
          </i>
          <h4>Low Price</h4>
          <p className="features-item">
            A single credit ($1 value) is required to start sending out surveys
            to up 100,000 emails. Credits are available in 5 credit bundles.
          </p>
        </div>

        <div className="col s12 m4">
          <i className="medium material-icons orange-text text-lighten-1">
            build
          </i>
          <h4>Easy to use</h4>
          <p className="features-item">
            Quick and simple interface allows you to create and send surveys to
            any list people/customers. Sign up today and send out your first
            survey in under 10 minutes.
          </p>
        </div>

        <div className="col s12 m4">
          <i className="medium material-icons orange-text text-lighten-1">
            dvr
          </i>
          <h4>View responses</h4>
          <p className="features-item">
            Snappy's dashboard allows you to take snapshot of all your existing
            surveys to view status at a glance. Select any survey to view more
            in depth information.
          </p>
        </div>

        <img
          className="responsive-img"
          src="assets/images/workbench.png"
          alt="workbench"
        />
      </div>
      {/* Optimization */}
      <div className="row blue-grey darken-1 grey-text text-lighten-5 landing-section flex-align-wrapper">
        <div className="col s12 l6 align-center">
          <h4 className="bottom-s-padding">Optimize Your Survey Services</h4>
          <h5 className="left-align bottom-s-padding side-margin">
            We will help ensure your program is optimized:
          </h5>

          <p className="left-align p-text">
            Continuously monitor responses in your Dashboard.
          </p>
          <div class="divider side-margin" />
          <p className="left-align p-text">
            Evaluate the revelevance of existing survey programs. Remove and add
            new surveys as needed.
          </p>
          <div class="divider side-margin" />
          <p className="left-align p-text">
            Ensure your account is setup properly with our Email Program Setup
            package, available for new senders and OEM/Cloud Platform Partners
          </p>
        </div>
        <div
          className="col s12 l6 align-end col-background-img"
          style={backgroundChartStyle}
        />
      </div>
      {/* Additional informaton */}
      <div className="row snappy-dark-blue grey-text text-lighten-5 landing-section flex-align-wrapper">
        <div className="col s1 m2 l3" />
        <div className="col s4 m3 l2 left-align top-s-margin">
          <h5>Solutions</h5>
          <ul>
            <li className="landing-list">
              <Link to="/">Pricing</Link>
            </li>
            <li className="landing-list">
              <Link to="/">Email Delivery</Link>
            </li>
            <li className="landing-list">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="landing-list">
              <Link to="/">Create Surveys</Link>
            </li>
          </ul>
        </div>
        <div className="col s4 m3 l2 left-align top-s-margin">
          <h5>Company</h5>
          <ul>
            <li className="landing-list">
              <Link to="/">Contact Support</Link>
            </li>
            <li className="landing-list">
              <Link to="/">About</Link>
            </li>
            <li className="landing-list">
              <Link to="/">Our Team</Link>
            </li>
            <li className="landing-list">
              <Link to="/">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="col s1 m2 l3" />
        <div className="col s12 align-end">
          <h4 className="section-margin">Snappy</h4>
          <p className="light-font">
            Copyright © {new Date().getFullYear()}. Snappy All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
