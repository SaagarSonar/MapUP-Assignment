import { createStore } from 'redux';
//reateStore function is imported from Redux. This function is used to create the Redux store


const SET_SELECTED_REGION = 'SET_SELECTED_REGION';
//Action type is single action type is defined as SET_SELECTED_REGION it is used to set the selected region in the state.

// Initial state
const initialState = {
    selectedRegion: '',
};


//function is responsible for handling state changes in the Redux store
const reducer = (state =
    initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_REGION:
            return {
                ...state,
                selectedRegion: action.payload,
            };
        default:
            return state;
    }
};

// Action creators
export const setSelectedRegion = (region) => {
    return {
        type: SET_SELECTED_REGION,
        payload: region,
    };
};

// Create and export the Redux store
const store = createStore(reducer);
export default store;
