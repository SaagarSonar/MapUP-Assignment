import { createStore } from 'redux';
//createStore function is imported from Redux. This function is used to create the Redux store.
import rootReducer from './reducers';
//rootReducer is imported from the reducers.js file. It is the combined reducer that was created using combineReducers, and it represents the overall state structure of the application.

const store = createStore(rootReducer);

export default store;
