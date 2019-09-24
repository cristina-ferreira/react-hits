// TODO: add and export your own actions
import actionTypes from '../constants/action-types';

const markAsDoneAction = hit => ({
    type: actionTypes.MARK_AS_DONE,
    hit
});

const changeFilterAction = filterType => ({
    type: filterType
});

export { markAsDoneAction, changeFilterAction };
