import React from 'react';

const backgroundTopStyle = {
  background: 'url(assets/images/welcome.png)',
  height: '100vh',
  width: '100%',
  minHeight: '300px',
  maxHeight: '600px',
  minWidth: '360px',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat'
};

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
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

      <div className="row section-padding s4 blue-grey lighten-5">
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
      {/* Contact */}
      <div className="row blue-grey darken-1 grey-text text-lighten-5 landing-section valign-wrapper">
        <div className="col s12">
          <h3>{"We're here for you. Let's talk!"}</h3>
          <h5> 1(800)555-5555 </h5>
          <p>
            Partner with the survey service trusted by smal business owners and
            marketers for time-savings, scalability, and delivery expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
