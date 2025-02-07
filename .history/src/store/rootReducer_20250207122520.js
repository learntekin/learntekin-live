// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import faqReducer from './faqReducer';
import c

const rootReducer = combineReducers({
  auth: authReducer,
  faqs: faqReducer,
  // Add more reducers if needed
});

export default rootReducer;
