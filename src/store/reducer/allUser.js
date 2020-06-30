import {
    All_User
} from '../action/allActionTypes';
import isEmpty from '../utils/isEmpty';

export default function(state = { allUser: [] }, action) {
    switch (action.type) {
        case All_User:
            return {
                ...state,
                allUser: [...action.type.payload]
            };
        default:
            return state;
    }
}