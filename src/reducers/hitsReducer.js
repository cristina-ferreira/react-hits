import actionTypes from '../constants/action-types';

const hitsReducer = (state = [], action) => {
    switch (action.type) {
    case actionTypes.MARK_AS_DONE: {
        const newState = state.map((h) => {
            if (h.id === action.hit.id) {
                return { ...h, done: !h.done };
            }
            return h;
        });
        return newState;
    }
    default:
        return [...state];
    }
};

export default hitsReducer;
