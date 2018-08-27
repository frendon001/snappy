import _ from 'lodash';
import { FETCH_SURVEYS, DELETE_SURVEY } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    case DELETE_SURVEY:
      console.log(state);
      return _.chain(state)
        .remove(function(survey) {
          return survey._id !== action.payload;
        })
        .reverse()
        .value();
    default:
      return state;
  }
}
