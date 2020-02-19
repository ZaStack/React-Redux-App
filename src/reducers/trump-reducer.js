import { FETCH_DATA, UPDATE_QUOTE, SET_ERROR } from '../actions';

const initialState = {
    quote: {},
    isFetchingData: false,
    error: ''
};

const trumpReducer = (state - initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                quote: {}
            };
        case UPDATE_QUOTE:
            return {
                ...state,
                quote: action.payload,
                isFetchingData: false
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
};