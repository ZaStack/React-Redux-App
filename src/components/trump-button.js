import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

const TrumpButton = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };
    return (
        <>
            {props.isFetchingData ? (
                <div>It's comin', just hold on</div>
            ) : (
                <button onClick={handleGetData} ><img src="https://clipart.info/images/ccovers/1523212417angry-trump-face-png.png" alt="Dumpty"/></button>
            )}
        </>
    )
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
};

export default connect( mapStateToProps, { getData })(TrumpButton);