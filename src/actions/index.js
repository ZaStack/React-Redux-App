import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const SET_ERROR = 'SET_ERROR';
export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});
    axios.get('https://tronalddump.io/random/quote').then(res => {
        console.log(res);
        dispatch({ type: UPDATE_QUOTE, payload:res.data.value })
        console.log("Data", res.data)
    }).catch(err => {
        console.error('Error fetching data from api, err: ', err);
    })
}