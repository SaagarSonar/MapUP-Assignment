// redux/reducers.js
import { combineReducers } from 'redux';
//combineReducers function is imported from Redux. it used to combine multiple reducers into a single root reducer.
import { SET_REGION, SET_NIGHT_MODE } from './actions';

//initialState object It includes properties for markers, selectedRegion, nightMode, collapsed, and possibly other initial state properties.
const initialState = {
    markers: [],
    selectedRegion: null, // To store the selected region
    nightMode: false,
    collapsed: false,
    // other initial state properties...
};

const rootReducer = combineReducers({
    // other reducers...
    selectedRegion: selectedRegionReducer, // Add the selectedRegionReducer
    nightMode: nightModeReducer,
});

function selectedRegionReducer(state = initialState.selectedRegion, action) {
    switch (action.type) {
        case SET_REGION:
            return action.payload;
        default:
            return state;
    }
}

function nightModeReducer(state = initialState.nightMode, action) {
    switch (action.type) {
        case SET_NIGHT_MODE:
            return action.payload;
        default:
            return state;
    }
}

export default rootReducer;
