const keys = require('../../config/keys');

module.exports = survey => {
  return `
  <html>
  <body style="text-align: center; margin-top: 50px;">
    <div style="max-width:500px; margin: 0 auto;">
      <h3 >Thank you for taking the time to share your feedback!</h3>
      <p>Please answer the following question:</p>
      <p>${survey.body}</p>
      <div>
        <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/yes"><button style="cursor:pointer; background-color:#26a69a;letter-spacing:.5px; color:#fff;text-decoration: none; border:0; font-size:16px; padding: 5px 15px; margin:10px 0px; width: 70px;">Yes</button></a>
      </div>
      <div>
        <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/no"><button style="cursor:pointer; background-color:#26a69a;letter-spacing:.5px; color:#fff;text-decoration: none; border:0; font-size:16px; padding: 5px 15px; margin:10px 0px; width: 70px;">No</button></a>
      </div>
    </div>
  </body>
  `;
};
