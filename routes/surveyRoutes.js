const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  //response to survey taker after answering question
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thank you for your feedback!');
  });

  //receive data from sendgrid and update database with survey answers
  app.post('/api/surveys/webhooks', (req, res) => {
    const surveyPath = new Path('/api/surveys/:surveyId/:choice');
    //obtain valid survey answers
    _.chain(req.body)
      .map(({ email, url }) => {
        const matchPath = surveyPath.test(new URL(url).pathname);
        if (matchPath) {
          return {
            email,
            surveyId: matchPath.surveyId,
            choice: matchPath.choice
          };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false }
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: { 'recipients.$.responded': true }
          }
        ).exec();
      })
      .value();

    res.send({});
  });

  //create surveys and send out emails
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    // Create new email mailer for sendgrid
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
