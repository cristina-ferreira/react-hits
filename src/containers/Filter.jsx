import React from 'react';
import { connect } from 'react-redux';
import actionTypes from '../constants/action-types';
import { changeFilterAction } from '../actions';

const Filter = (props) => {
    const handleChange = (e) => {
        props.changeFilter(e.target.value);
    };
    const { selectedFilter } = props;
    return (
        <div>
            <select id="filter-selector" onChange={handleChange} value={selectedFilter}>
                <option value={actionTypes.SHOW_ALL}>Show all</option>
                <option value={actionTypes.SHOW_ALIVE}>Show alive</option>
                <option value={actionTypes.SHOW_DEAD}>Show dead</option>
            </select>

        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    changeFilter: filterType => dispatch(changeFilterAction(filterType)),
});

const mapStateToProps = state => ({
    selectedFilter: state.filter
});


export default connect(mapStateToProps, mapDispatchToProps)(Filter);
