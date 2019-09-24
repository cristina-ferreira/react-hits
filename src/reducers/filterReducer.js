import actionTypes from '../constants/action-types';

const filterReducer = (state = '', action) => {
    switch (action.type) {
    case actionTypes.SHOW_ALL: {
        return action.type;
    }
    case actionTypes.SHOW_ALIVE: {
        return action.type;
    }
    case actionTypes.SHOW_DEAD: {
        return action.type;
    }
    default:
        return state;
    }
};

export default filterReducer;
