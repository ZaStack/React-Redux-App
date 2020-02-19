import React from 'react';
import { connect } from 'react-redux';

const TrumpCard = props => {
    return <div className="trump-card">{JSON.stringify(props)}</div>
};

const mapStateToProps = state => {
    return {
        quote: state,
        error: state.error
    }
};

export default connect( mapStateToProps, {})(TrumpCard);