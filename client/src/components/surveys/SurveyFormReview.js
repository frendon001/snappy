// SurveyFormReview shows allows users to review their form entries before final submission
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label className="medium-text">{label}</label>
        <div className="bottom-xs-margin">{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="row">
      <div className="col s0 m1 l2" />
      <div className="col s12 m10 l8">
        <h5>Please confirm your entries:</h5>
        {reviewFields}
        <div className="row top-s-padding">
          <button
            className="yellow darken-3 btn-flat white-text"
            onClick={onCancel}
          >
            Back
          </button>
          <button
            onClick={() => submitSurvey(formValues, history)}
            className="green btn-flat right white-text"
          >
            Send Survey
            <i className="material-icons right">email</i>
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
