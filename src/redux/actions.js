export const ADD_MARKER = 'ADD_MARKER';
export const SET_REGION = 'SET_REGION';
export const SET_NIGHT_MODE = 'SET_NIGHT_MODE';
//action types  those are  ADD_MARKER, SET_REGION, and SET_NIGHT_MODE. 
//These are used to identify the type of action that is dispatched to the Redux store.


export const addMarker = marker => ({ type: ADD_MARKER, payload: marker });
export const setRegion = region => ({ type: SET_REGION, payload: region });
export const setNightMode = nightMode => ({ type: SET_NIGHT_MODE, payload: nightMode });

// other actions...
export const setSelectedRegion = (region) => ({
    type: 'SET_SELECTED_REGION',
    payload: region,
});