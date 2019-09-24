import React from 'react';
import { connect } from 'react-redux';
import { markAsDoneAction } from '../actions';

const Hit = (props) => {
    const handleClickHit = () => {
        props.markAsDone(props.hit);
    }
    return (
        <div onClick={handleClickHit} role="presentation">
            {`${props.hit.id} - ${props.hit.name} - ${props.hit.done ? '[X]' : '[ ]' } `}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    markAsDone: hit => dispatch(markAsDoneAction(hit)),
});

export default connect(null, mapDispatchToProps)(Hit);
