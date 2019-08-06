import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    category: '',

}


const changeCategory = (state, action) => {
    return updateObject(state, {
        category: action.category
    });
}

const categoryReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY: return changeCategory(state, action);
        default:
            return state;
    }
}

export default categoryReducer;