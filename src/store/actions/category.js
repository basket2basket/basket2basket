import axios from 'axios';
import * as actionTypes from './actionTypes';

export const changeCategory = category => {
    return {
        type: actionTypes.CHANGE_CATEGORY,
        category: category
    }
};

